import { FOTOS, LARGURA_GRADE } from '../lib/fotos';

/* os três enfeites que aparecem no hover, alternando pela grade */
const ICONES = [
  <path key="a" d="M11 2L13.5 8.5L20 9.5L15.5 14L17 20.5L11 17L5 20.5L6.5 14L2 9.5L8.5 8.5L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>,
  <path key="b" d="M11,18 L4,11 C2,9 2,5 5,4 C8,3 11,6 11,6 C11,6 14,3 17,4 C20,5 20,9 18,11 L11,18Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>,
  <g key="c"><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.4"/><circle cx="11" cy="11" r="2.5" fill="currentColor"/></g>,
];

export default function Gallery() {
  return (
    <>
      <section className="gallery" id="galeria">
        <div className="wrap">
          <span className="sec-label" data-anim="up">Nossos Momentos</span>
          <p className="gallery-intro">Os capítulos da nossa história, escritos em momentos.</p>

          <div className="gallery-grid">
            {FOTOS.map((foto, i) => (
              /* data-foto é a chave que o carrossel usa para montar a versão
                 grande da mesma foto — ver lib/weddingExperience.js */
              <div className="gallery-item" key={foto.base} data-foto={foto.base}>
                <picture>
                  <source type="image/avif" srcSet={`/fotos/${foto.base}-${LARGURA_GRADE}.avif`} />
                  <source type="image/webp" srcSet={`/fotos/${foto.base}-${LARGURA_GRADE}.webp`} />
                  <img
                    src={`/fotos/${foto.base}-${LARGURA_GRADE}.jpg`}
                    alt={foto.alt}
                    width={foto.largura}
                    height={foto.altura}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="gallery-overlay">
                  <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    {ICONES[i % ICONES.length]}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — carrossel: os slides são montados em weddingExperience.js
          a partir das fotos da grade, então a lista nunca sai de sincronia */}
      <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos">
        <div className="lightbox-track" id="lightboxTrack"></div>
        <button className="lightbox-close" aria-label="Fechar">✕</button>
        <button className="lightbox-nav lightbox-prev" aria-label="Foto anterior">‹</button>
        <button className="lightbox-nav lightbox-next" aria-label="Próxima foto">›</button>
        <div className="lightbox-counter" id="lightboxCounter" aria-live="polite"></div>
      </div>


      {/* ═══════════════════════════════════════════
           VERSÍCULO
      ═══════════════════════════════════════════ */}
    </>
  );
}
