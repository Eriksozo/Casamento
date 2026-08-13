export default function Envelope() {
  return (
    <div id="envelope" className="envelope" role="button" tabIndex="0" aria-label="Toque para abrir o convite">

      {/* Cortina esquerda */}
      <div className="curtain curtain--left">
        <svg className="curtain__corner tl" width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M6,116 C18,88 38,58 68,36 C88,22 106,13 118,8" stroke="#3D3518" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20,100 C9,84 7,71 10,62" stroke="#3D3518" strokeWidth="1.1" strokeLinecap="round"/>
          <ellipse cx="10" cy="58" rx="5.5" ry="9" stroke="#3D3518" strokeWidth="1.1" transform="rotate(-32 10 58)"/>
          <path d="M40,80 C52,67 56,57 54,49" stroke="#3D3518" strokeWidth="1" strokeLinecap="round"/>
          <ellipse cx="54" cy="45" rx="4.5" ry="7.5" stroke="#3D3518" strokeWidth="1" transform="rotate(14 54 45)"/>
          <path d="M60,54 C54,40 52,28 56,19" stroke="#3D3518" strokeWidth=".9" strokeLinecap="round"/>
          <ellipse cx="56" cy="16" rx="4" ry="7" stroke="#3D3518" strokeWidth=".9" transform="rotate(-6 56 16)"/>
        </svg>
        <svg className="curtain__corner bl" width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M6,116 C18,88 38,58 68,36 C88,22 106,13 118,8" stroke="#3D3518" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20,100 C9,84 7,71 10,62" stroke="#3D3518" strokeWidth="1.1" strokeLinecap="round"/>
          <ellipse cx="10" cy="58" rx="5.5" ry="9" stroke="#3D3518" strokeWidth="1.1" transform="rotate(-32 10 58)"/>
          <path d="M40,80 C52,67 56,57 54,49" stroke="#3D3518" strokeWidth="1" strokeLinecap="round"/>
          <ellipse cx="54" cy="45" rx="4.5" ry="7.5" stroke="#3D3518" strokeWidth="1" transform="rotate(14 54 45)"/>
        </svg>
      </div>

      {/* Cortina direita */}
      <div className="curtain curtain--right">
        <svg className="curtain__corner tr" width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M6,116 C18,88 38,58 68,36 C88,22 106,13 118,8" stroke="#3D3518" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20,100 C9,84 7,71 10,62" stroke="#3D3518" strokeWidth="1.1" strokeLinecap="round"/>
          <ellipse cx="10" cy="58" rx="5.5" ry="9" stroke="#3D3518" strokeWidth="1.1" transform="rotate(-32 10 58)"/>
          <path d="M40,80 C52,67 56,57 54,49" stroke="#3D3518" strokeWidth="1" strokeLinecap="round"/>
          <ellipse cx="54" cy="45" rx="4.5" ry="7.5" stroke="#3D3518" strokeWidth="1" transform="rotate(14 54 45)"/>
          <path d="M60,54 C54,40 52,28 56,19" stroke="#3D3518" strokeWidth=".9" strokeLinecap="round"/>
          <ellipse cx="56" cy="16" rx="4" ry="7" stroke="#3D3518" strokeWidth=".9" transform="rotate(-6 56 16)"/>
        </svg>
        <svg className="curtain__corner br" width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M6,116 C18,88 38,58 68,36 C88,22 106,13 118,8" stroke="#3D3518" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20,100 C9,84 7,71 10,62" stroke="#3D3518" strokeWidth="1.1" strokeLinecap="round"/>
          <ellipse cx="10" cy="58" rx="5.5" ry="9" stroke="#3D3518" strokeWidth="1.1" transform="rotate(-32 10 58)"/>
          <path d="M40,80 C52,67 56,57 54,49" stroke="#3D3518" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Centro: logo + CTA */}
      <div className="envelope__center">
        <div className="envelope__logo">
          <img src="/fotos/logo-900.png" alt="Erik e Mikaela — Convite de Casamento" />
        </div>
        <div className="envelope__line"></div>
        <div className="envelope__cta">
          <svg className="envelope__tap" width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true">
            <path d="M14,2 C14,2 4,10 4,18 C4,24.6 8.5,30 14,31.5 C19.5,30 24,24.6 24,18 C24,10 14,2 14,2Z" stroke="#889645" strokeWidth="1"/>
            <line x1="14" y1="31.5" x2="14" y2="35" stroke="#889645" strokeWidth="1"/>
            <line x1="14" y1="14" x2="8"  y2="20" stroke="#889645" strokeWidth=".7" opacity=".5"/>
            <line x1="14" y1="10" x2="20" y2="16" stroke="#889645" strokeWidth=".7" opacity=".5"/>
          </svg>
          <span className="envelope__cta-text">Toque para abrir</span>
        </div>
      </div>

    </div>
  );
}
