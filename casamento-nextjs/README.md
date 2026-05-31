# Erik &amp; Mikaela — Convite de Casamento (Next.js)

Versão em **Next.js (App Router)** do site de casamento. Mesma experiência do HTML
original: envelope de abertura, hero animado, contagem regressiva, programação,
galeria com lightbox, versículo e player de música — agora com componentes React,
`gsap` + `lenis` via npm e assets servidos de `public/`.

## Como rodar

```bash
cd casamento-nextjs
npm install
npm run dev
```

Abra http://localhost:3000

Para produção:

```bash
npm run build
npm run start
```

## Deploy na Cloudflare Pages (site estático)

O projeto já está configurado para **exportar um site estático** (`output: 'export'`
em `next.config.mjs`) — o site é 100% client-side, então não precisa de servidor,
adaptadores ou Workers. O `npm run build` gera a pasta `out/`.

### 1. Subir para o GitHub

No seu computador, dentro da pasta `casamento-nextjs/`:

```bash
git init
git add .
git commit -m "Site de casamento Erik & Mikaela (Next.js)"
git branch -M main
# crie um repositório vazio em github.com/new (ex.: casamento-erik-mikaela)
git remote add origin https://github.com/SEU-USUARIO/casamento-erik-mikaela.git
git push -u origin main
```

> Importante: faça o push do **conteúdo da pasta `casamento-nextjs/`** como raiz do
> repositório (com o `package.json` no topo). Se preferir subir a pasta inteira,
> ajuste o "Root directory" na Cloudflare (passo 2).

### 2. Conectar na Cloudflare Pages

1. Acesse https://dash.cloudflare.com → **Workers & Pages** → **Create** → aba **Pages**
   → **Connect to Git** e selecione o repositório.
2. Em **Build settings**, use:

   | Campo | Valor |
   |---|---|
   | Framework preset | `Next.js (Static HTML Export)` (ou `None`) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | *(vazio — ou `casamento-nextjs` se subiu a pasta inteira)* |

3. Em **Environment variables**, adicione `NODE_VERSION` = `20`.
4. **Save and Deploy**. A cada `git push` na branch `main`, a Cloudflare refaz o deploy
   automaticamente.

### Domínio próprio (opcional)

Em **Custom domains**, dentro do projeto na Cloudflare Pages, adicione seu domínio
(ex.: `erikemikaela.com`) e siga as instruções de DNS.

## Deploy (Vercel — alternativa)

1. Suba a pasta `casamento-nextjs/` para um repositório no GitHub.
2. Importe o repositório em https://vercel.com — o framework é detectado
   automaticamente como Next.js, sem nenhuma configuração extra.

## Estrutura

```
casamento-nextjs/
├── app/
│   ├── layout.js          → <html>, metadata, fontes Google (Cormorant)
│   ├── page.js            → monta os componentes + dispara a lógica no mount
│   └── globals.css        → todo o CSS original (tokens, animações, seções)
├── components/
│   ├── Envelope.jsx       → pré-tela "toque para abrir"
│   ├── Chrome.jsx         → barra de scroll, áudio, botão de música
│   ├── Hero.jsx           → logo + tagline + ornamentos botânicos
│   ├── Details.jsx        → contagem regressiva + cards (data/cerimônia/recepção)
│   ├── Gallery.jsx        → galeria masonry + lightbox
│   ├── Verse.jsx          → versículo (Isaías 41:20)
│   └── Footer.jsx         → logo + data + bênção
├── lib/
│   └── weddingExperience.js → GSAP, Lenis, música, countdown, lightbox, envelope
└── public/                → logo, fotos da galeria e musica.mp3
```

## Notas

- A lógica imperativa (animações, smooth-scroll, áudio) roda dentro de um
  `useEffect` em `app/page.js`, depois que o DOM é montado — por isso os
  componentes usam `id`/`className` exatamente como no original.
- `reactStrictMode` está **desativado** (`next.config.mjs`) para evitar a dupla
  execução do efeito em desenvolvimento (o que reabriria o envelope).
- Para trocar fotos/música, basta substituir os arquivos em `public/`.
