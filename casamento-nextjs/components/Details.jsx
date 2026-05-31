export default function Details() {
  return (
    <section className="details" id="programacao">
      <div className="wrap">
        <span className="sec-label" data-anim="up">Programação</span>

        {/* Countdown Timer */}
        <div className="countdown" data-anim="up" data-delay="100" style={{ opacity: '1' }}>
          <div className="countdown-item">
            <div className="countdown-number" id="days">0</div>
            <div className="countdown-label">Dias</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number" id="hours">0</div>
            <div className="countdown-label">Horas</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number" id="minutes">0</div>
            <div className="countdown-label">Minutos</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number" id="seconds">0</div>
            <div className="countdown-label">Segundos</div>
          </div>
        </div>

        <div className="cards">

          {/* DATA & HORÁRIO */}
          <article className="card" data-anim="up" data-delay="0">
            <svg className="card__icon" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <rect x="5" y="7" width="32" height="29" rx="2" stroke="#8B6848" strokeWidth="1.3"/>
              <line x1="5"  y1="15" x2="37" y2="15" stroke="#8B6848" strokeWidth="1.3"/>
              <line x1="13" y1="3"  x2="13" y2="11" stroke="#8B6848" strokeWidth="1.3" strokeLinecap="round"/>
              <line x1="29" y1="3"  x2="29" y2="11" stroke="#8B6848" strokeWidth="1.3" strokeLinecap="round"/>
              <text x="21" y="30" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontSize="11" fill="#8B6848" fontWeight="500">19</text>
            </svg>
            <p className="card__label">Data &amp; Horário</p>
            <p className="card__main">19 de Setembro<br />de 2026</p>
            <p className="card__sub">Sábado · às 15h30</p>
          </article>

          <div className="card-sep" aria-hidden="true">
            <div className="card-sep-line"></div>
            <span></span><span></span><span></span>
            <div className="card-sep-line"></div>
          </div>

          {/* CERIMÔNIA */}
          <article className="card" data-anim="up" data-delay="120">
            <svg className="card__icon" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <rect x="8"  y="19" width="26" height="18" rx="1" stroke="#8B6848" strokeWidth="1.3"/>
              <path d="M3,19 L21,6 L39,19" stroke="#8B6848" strokeWidth="1.3" strokeLinejoin="round"/>
              <line x1="21" y1="2"  x2="21" y2="6"  stroke="#8B6848" strokeWidth="1.3" strokeLinecap="round"/>
              <rect x="16" y="27" width="10" height="10" rx="1" stroke="#8B6848" strokeWidth="1.1"/>
              <line x1="21" y1="27" x2="21" y2="37" stroke="#8B6848" strokeWidth=".9" opacity=".4"/>
            </svg>
            <p className="card__label">Cerimônia</p>
            <p className="card__main">Igreja Matriz<br />N. Sra. do Carmo</p>
            <p className="card__sub">R. Floriano Peixoto, 1140<br />Centro — Boa Vista, RR</p>
            <a className="btn-map"
               href="https://maps.google.com/?q=Igreja+Matriz+Nossa+Senhora+do+Carmo+Boa+Vista+RR"
               target="_blank" rel="noopener">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M1,10 L10,1 M5.5,1 L10,1 L10,5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Ver no mapa</span>
            </a>
          </article>

          <div className="card-sep" aria-hidden="true">
            <div className="card-sep-line"></div>
            <span></span><span></span><span></span>
            <div className="card-sep-line"></div>
          </div>

          {/* RECEPÇÃO */}
          <article className="card" data-anim="up" data-delay="240">
            <svg className="card__icon" viewBox="0 0 42 42" fill="none" aria-hidden="true">
              <path d="M21,4 C14,4 8,10 8,17 C8,26.5 21,39 21,39 C21,39 34,26.5 34,17 C34,10 28,4 21,4Z" stroke="#8B6848" strokeWidth="1.3"/>
              <circle cx="21" cy="17" r="5.5" stroke="#8B6848" strokeWidth="1.3"/>
            </svg>
            <p className="card__label">Recepção</p>
            <p className="card__main">Esquina<br />Coisas Da Terra</p>
            <p className="card__sub">Rua Ana Nery, 369<br />Canarinho</p>
            <a className="btn-map"
               href="https://maps.google.com/?q=Rua+Ana+Nery+369+Canarinho"
               target="_blank" rel="noopener">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M1,10 L10,1 M5.5,1 L10,1 L10,5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Ver no mapa</span>
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}
