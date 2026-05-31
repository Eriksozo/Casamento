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


      {/* ═══════════════════════════════════════════
           HERO
      ═══════════════════════════════════════════ */}
    </>
  );
}
