export default function Hero() {
  return (
    <section className="hero">


      {/* Botanical corners - inspired by logo ramos */}
      <svg className="corner corner--tl" width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
        <g opacity="0.8">
          {/* Main vine */}
          <path d="M8,130 Q25,110 40,80 Q50,60 55,35" stroke="#3D3518" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Left branches */}
          <path d="M20,120 Q15,110 12,98" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <ellipse cx="10" cy="95" rx="2.5" ry="4" stroke="#3D3518" strokeWidth="0.8" fill="none" transform="rotate(-35 10 95)"/>
          <path d="M30,105 Q22,98 18,88" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <circle cx="16" cy="85" r="1.8" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          <path d="M42,90 Q36,82 32,72" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <ellipse cx="31" cy="69" rx="2" ry="3.5" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          {/* Right branches */}
          <path d="M28,125 Q35,115 40,103" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <circle cx="41" cy="100" r="1.8" stroke="#3D3518" strokeWidth="0.8" fill="none"/>
          <path d="M45,100 Q52,90 58,78" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <ellipse cx="59" cy="75" rx="2.5" ry="4" stroke="#3D3518" strokeWidth="0.7" fill="none" transform="rotate(25 59 75)"/>
        </g>
      </svg>
      <svg className="corner corner--tr" width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
        <g opacity="0.8">
          {/* Main vine */}
          <path d="M132,130 Q115,110 100,80 Q90,60 85,35" stroke="#3D3518" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Left branches */}
          <path d="M110,90 Q104,82 100,72" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <ellipse cx="99" cy="69" rx="2" ry="3.5" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          <path d="M98,105 Q92,98 88,88" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <circle cx="86" cy="85" r="1.8" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          {/* Right branches */}
          <path d="M120,120 Q125,110 128,98" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <ellipse cx="130" cy="95" rx="2.5" ry="4" stroke="#3D3518" strokeWidth="0.8" fill="none" transform="rotate(35 130 95)"/>
          <path d="M110,125 Q118,115 122,103" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <circle cx="123" cy="100" r="1.8" stroke="#3D3518" strokeWidth="0.8" fill="none"/>
        </g>
      </svg>
      <svg className="corner corner--bl" width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
        <g opacity="0.8">
          {/* Main vine */}
          <path d="M8,10 Q25,30 40,60 Q50,80 55,105" stroke="#3D3518" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Left branches */}
          <path d="M20,20 Q15,30 12,42" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <ellipse cx="10" cy="45" rx="2.5" ry="4" stroke="#3D3518" strokeWidth="0.8" fill="none" transform="rotate(-35 10 45)"/>
          <path d="M30,35 Q22,42 18,52" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <circle cx="16" cy="55" r="1.8" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          {/* Right branches */}
          <path d="M28,15 Q35,25 40,37" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <circle cx="41" cy="40" r="1.8" stroke="#3D3518" strokeWidth="0.8" fill="none"/>
          <path d="M45,40 Q52,50 58,62" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <ellipse cx="59" cy="65" rx="2.5" ry="4" stroke="#3D3518" strokeWidth="0.7" fill="none" transform="rotate(25 59 65)"/>
        </g>
      </svg>
      <svg className="corner corner--br" width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden="true">
        <g opacity="0.8">
          {/* Main vine */}
          <path d="M132,10 Q115,30 100,60 Q90,80 85,105" stroke="#3D3518" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Left branches */}
          <path d="M110,50 Q104,58 100,68" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <ellipse cx="99" cy="71" rx="2" ry="3.5" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          <path d="M98,35 Q92,42 88,52" stroke="#3D3518" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <circle cx="86" cy="55" r="1.8" stroke="#3D3518" strokeWidth="0.7" fill="none"/>
          {/* Right branches */}
          <path d="M120,20 Q125,30 128,42" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <ellipse cx="130" cy="45" rx="2.5" ry="4" stroke="#3D3518" strokeWidth="0.8" fill="none" transform="rotate(35 130 45)"/>
          <path d="M110,15 Q118,25 122,37" stroke="#3D3518" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <circle cx="123" cy="40" r="1.8" stroke="#3D3518" strokeWidth="0.8" fill="none"/>
        </g>
      </svg>

      <div className="hero__inner">

        <div className="hero__logo" data-anim="sc">
          <img src="/logo.png" alt="Erik e Mikaela — 19 de Setembro de 2026" />
        </div>

        <div className="hero__tagline" data-anim="up" data-delay="250">
          <p className="eyebrow">Convidamos você a celebrar</p>
          <p className="copy">Com alegria e gratidão a Deus,<br />celebramos nossa união</p>
        </div>

        <div className="hero__vine" data-anim="in" data-delay="500">
          <div className="vine-line"></div>
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" aria-hidden="true">
            <path d="M10,1 C10,1 2,7 2,14 C2,19 5.6,23 10,24 C14.4,23 18,19 18,14 C18,7 10,1 10,1Z" stroke="#889645" strokeWidth=".9"/>
            <line x1="10" y1="24" x2="10" y2="26" stroke="#889645" strokeWidth=".9"/>
            <line x1="10" y1="12" x2="5"  y2="17" stroke="#889645" strokeWidth=".6" opacity=".55"/>
            <line x1="10" y1="9"  x2="15" y2="14" stroke="#889645" strokeWidth=".6" opacity=".55"/>
            <line x1="10" y1="16" x2="14" y2="20" stroke="#889645" strokeWidth=".6" opacity=".55"/>
          </svg>
          <div className="vine-line" style={{ transform: 'scaleX(-1)' }}></div>
        </div>

      </div>

      <div className="hero__scroll" id="scrollCue">
        <span>rolar</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
          <path d="M1,1 L8,8 L15,1" stroke="#8B6848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

    </section>






    {/* ═══════════════════════════════════════════
         PROGRAMAÇÃO
    ═══════════════════════════════════════════ */}
  );
}
