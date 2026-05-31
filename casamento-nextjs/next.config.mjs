/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desativado para evitar a dupla execução do efeito (envelope/GSAP) em dev.
  reactStrictMode: false,

  // Exporta um site estático para `out/` — ideal para Cloudflare Pages,
  // GitHub Pages, Netlify, etc. (o site é 100% client-side, sem servidor).
  output: 'export',

  // Sem otimização de imagem no servidor (usamos <img> normal + export estático).
  images: { unoptimized: true },

  // Garante barra final nas rotas (melhor compatibilidade em hospedagem estática).
  trailingSlash: true,
};

export default nextConfig;
