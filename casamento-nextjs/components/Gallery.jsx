export default function Gallery() {
  return (
    <>
      <section className="gallery" id="galeria">
        <div className="wrap">
          <span className="sec-label" data-anim="up">Nossos Momentos</span>
          <p className="gallery-intro">Os capítulos da nossa história, escritos em momentos.</p>

          <div className="gallery-grid">
            <div className="gallery-item" data-img="/gallery-01.jpg">
              <img src="/gallery-01.jpg" alt="Erik e Mikaela - Momento 1" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2L13.5 8.5L20 9.5L15.5 14L17 20.5L11 17L5 20.5L6.5 14L2 9.5L8.5 8.5L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="gallery-item" data-img="/gallery-02.jpg">
              <img src="/gallery-02.jpg" alt="Erik e Mikaela - Momento 2" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11,3 C11,3 5,5 5,11 C5,17 11,19 11,19 C11,19 17,17 17,11 C17,5 11,3 11,3Z" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </div>
            </div>
            <div className="gallery-item" data-img="/gallery-03.jpg">
              <img src="/gallery-03.jpg" alt="Erik e Mikaela - Momento 3" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="11" cy="11" r="2.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="gallery-item" data-img="/gallery-04.jpg">
              <img src="/gallery-04.jpg" alt="Erik e Mikaela - Momento 4" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3,11 L19,11 M11,3 L19,11 L11,19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="gallery-item" data-img="/gallery-05.jpg">
              <img src="/gallery-05.jpg" alt="Erik e Mikaela - Momento 5" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11,18 L4,11 C2,9 2,5 5,4 C8,3 11,6 11,6 C11,6 14,3 17,4 C20,5 20,9 18,11 L11,18Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="gallery-item" data-img="/gallery-06.jpg">
              <img src="/gallery-06.jpg" alt="Erik e Mikaela - Momento 6" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2L13.5 8.5L20 9.5L15.5 14L17 20.5L11 17L5 20.5L6.5 14L2 9.5L8.5 8.5L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="gallery-item" data-img="/gallery-08.jpg">
              <img src="/gallery-08.jpg" alt="Erik e Mikaela - Momento 7" />
              <div className="gallery-overlay">
                <svg className="gallery-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11,18 L4,11 C2,9 2,5 5,4 C8,3 11,6 11,6 C11,6 14,3 17,4 C20,5 20,9 18,11 L11,18Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className="lightbox" id="lightbox">
        <button className="lightbox-close" aria-label="Fechar">✕</button>
        <button className="lightbox-nav lightbox-prev" aria-label="Anterior">‹</button>
        <button className="lightbox-nav lightbox-next" aria-label="Próxima">›</button>
        <img className="lightbox-img" id="lightboxImg" alt="" />
        <div className="lightbox-counter" id="lightboxCounter">1 / 7</div>
      </div>


      {/* ═══════════════════════════════════════════
           VERSÍCULO
      ═══════════════════════════════════════════ */}
    </>
  );
}
