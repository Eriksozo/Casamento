export default function Presentes() {
  return (
    <section className="presentes" id="presentes">
      <div className="wrap">
        <span className="sec-label" data-anim="up">Presenteie o Casal</span>

        <p className="presentes-intro" data-anim="up" data-delay="80">
          A presença de vocês no nosso dia já é o maior presente.
          Se quiserem nos abençoar com algo a mais, ficaremos muito gratos.
        </p>

        <div className="presentes-grid">
          {/* PIX */}
          <article className="presente-card" data-anim="up" data-delay="160">
            <svg className="presente-card__icon" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <path d="M13.5,13.5 L21,6 L28.5,13.5" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M13.5,28.5 L21,36 L28.5,28.5" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M13.5,13.5 L6,21 L13.5,28.5" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M28.5,13.5 L36,21 L28.5,28.5" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <circle cx="21" cy="21" r="4.2" stroke="#8B6848" strokeWidth="1.3"/>
            </svg>
            <p className="card__label">Pix</p>
            <p className="presente-card__texto">
              Uma contribuição para a nossa vida a dois.
            </p>
            <p className="presente-card__pendente">chave a definir</p>
          </article>

          {/* LISTA DE PRESENTES */}
          <article className="presente-card" data-anim="up" data-delay="280">
            <svg className="presente-card__icon" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <path d="M7,18 H35 V34 a2,2 0 0 1 -2,2 H9 a2,2 0 0 1 -2,-2 Z" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M5,12 H37 V18 H5 Z" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M21,12 V36" stroke="#8B6848" strokeWidth="1.3"/>
              <path d="M21,12 S19,4 14,4 a4.2,4.2 0 0 0 0,8 Z" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M21,12 S23,4 28,4 a4.2,4.2 0 0 1 0,8 Z" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            <p className="card__label">Lista de Presentes</p>
            <p className="presente-card__texto">
              Escolha um presente que combine com a gente.
            </p>
            <p className="presente-card__pendente">link a definir</p>
          </article>
        </div>
      </div>
    </section>
  );
}
