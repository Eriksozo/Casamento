/**
 * Borra o fundo de fotos específicas, preservando o original.
 *
 *     npm install --no-save sharp
 *     node scripts/borrar-fundo.mjs
 *
 * Lê de fotos-originais/ e grava em fotos-originais/editadas/. O
 * otimizar-fotos.mjs prefere a versão editada quando ela existe, então o
 * original nunca é sobrescrito e basta apagar o arquivo de editadas/ para
 * voltar atrás.
 *
 * A separação é geométrica, não por IA: a máscara é a união de elipses
 * (que podem ser rotacionadas) desenhadas sobre o assunto, com borda
 * suavizada. Funciona bem quando o que está perto da pessoa é liso — foi o
 * caso da gallery-02, onde a bagunça (prateleira, livros, gavetas) está
 * longe dela e o que encosta é parede branca. Para foto com fundo
 * detalhado colado no assunto isso não serve; ali só recorte de verdade.
 *
 * Para calibrar uma foto nova: rode com DEBUG=1 para gravar a máscara e um
 * painel comparando as regiões críticas em 1:1.
 *     DEBUG=1 node scripts/borrar-fundo.mjs
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const RAIZ    = path.resolve(import.meta.dirname, '..');
const ORIGEM  = path.join(RAIZ, 'fotos-originais');
const DESTINO = path.join(ORIGEM, 'editadas');
const DEBUG   = !!process.env.DEBUG;

/* Coordenadas em fração da largura/altura, então independem da resolução.
   rot é em graus; suav é a largura da borda suave, em múltiplos do raio. */
const TRABALHOS = [
  {
    arquivo: 'gallery-02.jpg',
    sigma: 30,
    elipses: [
      { cx: 0.60, cy: 0.40, rx: 0.30, ry: 0.26, rot: 58, suav: 0.34 }, // rosto e alto do cabelo
      { cx: 0.72, cy: 0.55, rx: 0.26, ry: 0.22, rot: 58, suav: 0.34 }, // cabelo descendo à direita
      { cx: 0.58, cy: 0.80, rx: 0.55, ry: 0.30,           suav: 0.30 }, // tronco e braços
    ],
    /* o corpo dela ocupa a base inteira do quadro */
    faixa: { de: 0.72, ate: 0.86 },
    /* recortes 1:1 conferidos ao calibrar (só com DEBUG=1) */
    conferir: [
      { left: 430, top:   0, width: 338, height: 250 }, // livros, canto superior direito
      { left:   0, top: 740, width: 338, height: 250 }, // antebraço
      { left: 430, top: 400, width: 338, height: 250 }, // cabelo e brinco
    ],
  },
];

const suave = (a) => { a = Math.max(0, Math.min(1, a)); return a * a * (3 - 2 * a); };

function mascara(w, h, t) {
  const m = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let a = 0;
      for (const e of t.elipses) {
        const th = (e.rot || 0) * Math.PI / 180;
        const dx = x - e.cx * w, dy = y - e.cy * h;
        const u = ( dx * Math.cos(th) + dy * Math.sin(th)) / (e.rx * w);
        const v = (-dx * Math.sin(th) + dy * Math.cos(th)) / (e.ry * h);
        a = Math.max(a, suave(1 - (Math.hypot(u, v) - 1) / e.suav));
      }
      if (t.faixa) a = Math.max(a, suave((y / h - t.faixa.de) / (t.faixa.ate - t.faixa.de)));
      const i = (y * w + x) * 4;
      m[i] = m[i + 1] = m[i + 2] = 255;
      m[i + 3] = Math.round(a * 255);   /* 255 = nítido, 0 = borrado */
    }
  }
  return sharp(m, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

await mkdir(DESTINO, { recursive: true });

for (const t of TRABALHOS) {
  const entrada = path.join(ORIGEM, t.arquivo);
  const { width: w, height: h } = await sharp(entrada).metadata();

  const mk = await mascara(w, h, t);
  const nitido = await sharp(entrada).ensureAlpha()
    .composite([{ input: mk, blend: 'dest-in' }]).png().toBuffer();

  /* qualidade alta: este arquivo ainda vai ser reencodado pelo pipeline,
     então não pode acumular perda aqui */
  const saida = path.join(DESTINO, t.arquivo);
  await sharp(entrada).blur(t.sigma)
    .composite([{ input: nitido, blend: 'over' }])
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(saida);

  console.log(`${t.arquivo}  ${w}x${h}  fundo borrado (sigma ${t.sigma}) -> ${path.relative(RAIZ, saida)}`);

  if (DEBUG) {
    await writeFile(path.join(DESTINO, `_mascara-${t.arquivo}.png`), mk);
    const linhas = [];
    for (const r of t.conferir || []) {
      linhas.push({
        a: await sharp(entrada).extract(r).toBuffer(),
        b: await sharp(saida).extract(r).toBuffer(),
      });
    }
    if (linhas.length) {
      const lg = t.conferir[0].width, at = t.conferir[0].height;
      await sharp({ create: { width: lg * 2 + 10, height: (at + 10) * linhas.length, channels: 3, background: '#fff' } })
        .composite(linhas.flatMap((l, i) => [
          { input: l.a, left: 0, top: i * (at + 10) },
          { input: l.b, left: lg + 10, top: i * (at + 10) },
        ]))
        .jpeg({ quality: 95 })
        .toFile(path.join(DESTINO, `_conferir-${t.arquivo}`));
      console.log(`  DEBUG: máscara e painel de conferência em ${path.relative(RAIZ, DESTINO)}/`);
    }
  }
}
