const LOJAS = [
  {
    nome: 'Lojas Perin',
    local: 'Major Williams',
    pessoa: 'Andreina',
    telefone: '5595991702426',
    exibicao: '(95) 99170-2426',
  },
  {
    nome: 'Morada Home Center',
    telefone: '5595981068200',
    exibicao: '(95) 98106-8200',
  },
];

const MENSAGEM = encodeURIComponent(
  'Quero a lista de presentes para o casal Erik e Mikaela'
);

export default function Presentes() {
  return (
    <section className="presentes" id="presentes">
      <div className="wrap">
        <span className="sec-label" data-anim="up">Presenteie o Casal</span>

        <p className="presentes-intro" data-anim="up" data-delay="80">
          A presença de vocês no nosso dia já é o maior presente.
          Se quiserem nos abençoar com algo a mais, montamos nossa lista
          nestas duas lojas.
        </p>

        <div className="presentes-grid">
          {/* ── LISTA DE PRESENTES ── */}
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
              A lista já está montada nas duas lojas. Toque para falar com
              quem cuida dela:
            </p>

            <ul className="lojas">
              {LOJAS.map((loja) => (
                <li key={loja.telefone}>
                  <a
                    className="loja"
                    href={`https://wa.me/${loja.telefone}?text=${MENSAGEM}`}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Falar no WhatsApp com ${loja.pessoa || loja.nome} sobre a lista de presentes`}
                  >
                    <svg className="loja__zap" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z"/>
                    </svg>
                    <span className="loja__texto">
                      <span className="loja__nome">{loja.nome}</span>
                      {loja.local && <span className="loja__local">{loja.local}</span>}
                      <span className="loja__contato">
                        {loja.pessoa ? `${loja.pessoa} · ` : ''}
                        {loja.exibicao}
                      </span>
                    </span>
                    <span className="loja__acao">
                      Chamar
                      <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M4 2l4.5 4L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
