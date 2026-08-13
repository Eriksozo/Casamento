/**
 * Gera as versões web das fotos a partir de fotos-originais/.
 *
 * Rode na sua máquina e faça commit do resultado:
 *     npm install --no-save sharp
 *     node scripts/otimizar-fotos.mjs
 *
 * O sharp fica fora do package.json de propósito: só é preciso quando
 * chegarem fotos novas, e deixá-lo como dependência faria o Cloudflare
 * baixá-lo (~50 MB) em todo deploy sem nunca usar.
 *
 * De propósito NÃO roda no build do Cloudflare: as fotos de origem não mudam,
 * e encodar 24 fotos de 24 MP lá custaria minutos a cada deploy, além de
 * arrastar o sharp para as dependências de produção.
 *
 * As qualidades abaixo foram calibradas medindo SSIM contra a referência
 * redimensionada sem perda, e depois conferidas a olho em recortes 1:1 nas
 * regiões de pior erro. Não mexa nelas no chute.
 */
import sharp from 'sharp';
import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const RAIZ      = path.resolve(import.meta.dirname, '..');
const ORIGEM    = path.join(RAIZ, 'fotos-originais');
const DESTINO   = path.join(RAIZ, 'public', 'fotos');
const MANIFESTO = path.join(RAIZ, 'lib', 'fotos.js');

/* 800 cobre a maior célula da grade: em tela DPR3 uma célula alta chega a
   1110 px de altura e, com object-fit:cover, uma foto 2:3 precisa de 740 px
   de largura para cobri-la. 1600 cobre o carrossel com folga em qualquer
   celular (o pior caso medido foi 1161 px, num iPhone Pro Max). */
const LARGURAS = { grade: 800, foto: 1600 };

const PERFIS = {
  grade: {
    avif: { quality: 65, effort: 6, chromaSubsampling: '4:4:4' },
    webp: { quality: 82, effort: 6 },
    jpeg: { quality: 80, progressive: true, optimiseScans: true, trellisQuantisation: true },
  },
  foto: {
    avif: { quality: 75, effort: 6, chromaSubsampling: '4:4:4' },
    /* 4:4:4 no AVIF e smartSubsample no WebP porque o croma é onde a perda
       aparece: vermelho saturado (o buquê, o vestido) escorre na borda, e o
       SSIM de luminância é cego a isso. */
    webp: { quality: 84, effort: 6, smartSubsample: true },
    jpeg: { quality: 86, progressive: true, optimiseScans: true, trellisQuantisation: true },
  },
};

const kb = (n) => (n / 1024).toFixed(0).padStart(4);

async function gerar(arquivo) {
  const base = path.basename(arquivo, path.extname(arquivo));
  const src  = sharp(path.join(ORIGEM, arquivo)).rotate(); /* respeita EXIF se entrar foto nova */
  const meta = await src.metadata();

  const saidas = [];
  for (const [papel, largura] of Object.entries(LARGURAS)) {
    for (const [formato, opcoes] of Object.entries(PERFIS[papel])) {
      const ext  = formato === 'jpeg' ? 'jpg' : formato;
      const nome = `${base}-${largura}.${ext}`;
      const buf  = await sharp(path.join(ORIGEM, arquivo))
        .rotate()
        .resize({ width: largura, kernel: 'lanczos3', withoutEnlargement: true })
        [formato](opcoes)
        .toBuffer();
      await writeFile(path.join(DESTINO, nome), buf);
      saidas.push({ nome, bytes: buf.length });
    }
  }

  /* dimensões reais do arquivo de grade, para o markup declarar width/height
     e o navegador reservar o espaço antes de baixar (sem pulo de layout) */
  const dimGrade = await sharp(path.join(DESTINO, `${base}-${LARGURAS.grade}.jpg`)).metadata();

  const total = saidas.reduce((s, o) => s + o.bytes, 0);
  console.log(`${base}  ${meta.width}x${meta.height} -> ${kb(total)} KB em 6 arquivos ` +
              `(avif ${kb(saidas.find(o => o.nome.endsWith(`${LARGURAS.foto}.avif`)).bytes)} KB na foto grande)`);

  return { base, largura: dimGrade.width, altura: dimGrade.height, original: { w: meta.width, h: meta.height } };
}

const t0 = Date.now();
await mkdir(DESTINO, { recursive: true });

const arquivos = (await readdir(ORIGEM))
  .filter((f) => /^(gallery-\d+|hero-bg)\.jpe?g$/i.test(f))
  .filter((f) => f !== 'gallery-07.jpg') /* cópia byte-a-byte da 08 e não usada */
  .sort();

console.log(`Otimizando ${arquivos.length} fotos de ${path.relative(RAIZ, ORIGEM)}/\n`);

const fichas = [];
for (const f of arquivos) fichas.push(await gerar(f));

/* Os logos: PNG com transparência, exibidos no máximo a 297 px CSS (891 px
   numa tela DPR3). Vinham em 1254 px e 774 KB. AVIF e WebP guardam o canal
   alfa; o PNG fica só de reserva para navegador antigo. */
for (const logo of ['logo', 'logo-cream']) {
  const entrada = path.join(RAIZ, 'public', `${logo}.png`);
  try { await stat(entrada); } catch { continue; }

  const base = sharp(entrada).resize({ width: 900, kernel: 'lanczos3', withoutEnlargement: true });
  const arquivos = {
    [`${logo}-900.avif`]: await base.clone().avif({ quality: 70, effort: 6 }).toBuffer(),
    [`${logo}-900.webp`]: await base.clone().webp({ quality: 88, effort: 6 }).toBuffer(),
    [`${logo}-900.png`]:  await base.clone().png({ compressionLevel: 9, palette: true }).toBuffer(),
  };
  for (const [nome, buf] of Object.entries(arquivos)) {
    await writeFile(path.join(DESTINO, nome), buf);
  }
  const antes = (await stat(entrada)).size;
  console.log(`${logo}  ${kb(antes)} KB -> ` +
    Object.entries(arquivos).map(([n, b]) => `${n.split('.').pop()} ${kb(b.length)} KB`).join(', '));
}

const galeria = fichas.filter((f) => f.base.startsWith('gallery-'));
const hero    = fichas.find((f) => f.base === 'hero-bg');

await writeFile(MANIFESTO,
`/* GERADO por scripts/otimizar-fotos.mjs — não edite à mão. */

export const LARGURA_GRADE = ${LARGURAS.grade};
export const LARGURA_FOTO  = ${LARGURAS.foto};

/* proporção da versão de grade, para reservar o espaço no layout */
export const HERO = ${JSON.stringify({ base: hero.base, largura: hero.largura, altura: hero.altura })};

export const FOTOS = [
${galeria.map((f, i) => `  { base: '${f.base}', largura: ${f.largura}, altura: ${f.altura}, alt: 'Erik e Mikaela — momento ${i + 1}' },`).join('\n')}
];
`);

const bytes = (await Promise.all(
  (await readdir(DESTINO)).map(async (f) => (await stat(path.join(DESTINO, f))).size)
)).reduce((a, b) => a + b, 0);

console.log(`\npublic/fotos/: ${(bytes / 1048576).toFixed(1)} MB no total`);
console.log(`manifesto: ${path.relative(RAIZ, MANIFESTO)} (${galeria.length} fotos)`);
console.log(`levou ${((Date.now() - t0) / 1000).toFixed(0)}s`);
