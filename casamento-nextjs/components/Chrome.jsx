export default function Chrome() {
  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-bar" id="scrollBar" aria-hidden="true"></div>

      {/* Audio */}
      <audio id="bgAudio" loop preload="none">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* Music toggle button */}
      <button className="music-btn" id="musicBtn" aria-label="Tocar música">
        <div className="music-btn__waves" aria-hidden="true"></div>
        <div className="music-btn__waves" aria-hidden="true"></div>
        <div className="music-btn__waves" aria-hidden="true"></div>
        <div className="music-btn__disc" aria-hidden="true"></div>
        {/* play icon */}
        <svg className="icon-play" width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
          <path d="M2,1 L13,8 L2,15 Z" fill="#889645"/>
        </svg>
        {/* pause icon */}
        <svg className="icon-pause" width="12" height="15" viewBox="0 0 12 15" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="3.5" height="13" rx="1.5" fill="#889645"/>
          <rect x="7.5" y="1" width="3.5" height="13" rx="1.5" fill="#889645"/>
        </svg>
        <span className="music-btn__label" aria-hidden="true">música</span>
      </button>

      {/* Botão flutuante de presente — leva à seção Presenteie o Casal */}
      <a className="gift-btn" id="giftBtn" href="#presentes">
        <svg className="gift-btn__icon" width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M2.6 9.4h14.8v8.2a1 1 0 0 1-1 1H3.6a1 1 0 0 1-1-1V9.4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M1.6 6.2h16.8v3.2H1.6V6.2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          <path d="M10 6.2v12.4" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M10 6.2S8.9 1.6 6.4 1.6a2.3 2.3 0 0 0 0 4.6H10Zm0 0s1.1-4.6 3.6-4.6a2.3 2.3 0 0 1 0 4.6H10Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        </svg>
        <span className="gift-btn__label">Presenteie o Casal</span>
      </a>


      {/* ═══════════════════════════════════════════
           HERO
      ═══════════════════════════════════════════ */}
    </>
  );
}
