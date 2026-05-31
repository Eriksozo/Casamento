export default function Verse() {
  return (
    <section className="verse">
      <div className="verse__aurora" aria-hidden="true"></div>
      <div className="verse__ring"   aria-hidden="true"></div>

      <div className="wrap">
        <div className="verse-rule"  data-anim="in"></div>

        <div className="verse__leaf" data-anim="in" data-delay="100" aria-hidden="true">
          <svg width="26" height="34" viewBox="0 0 26 34" fill="none">
            <path d="M13,1 C13,1 2,8 2,18 C2,25 7,30.5 13,32 C19,30.5 24,25 24,18 C24,8 13,1 13,1Z" stroke="#889645" strokeWidth=".9"/>
            <line x1="13" y1="32" x2="13" y2="34" stroke="#889645" strokeWidth=".9"/>
            <line x1="13" y1="15" x2="7"  y2="21" stroke="#889645" strokeWidth=".6" opacity=".45"/>
            <line x1="13" y1="11" x2="19" y2="17" stroke="#889645" strokeWidth=".6" opacity=".45"/>
            <line x1="13" y1="19" x2="18" y2="24" stroke="#889645" strokeWidth=".6" opacity=".45"/>
          </svg>
        </div>

        <blockquote className="verse__text" data-anim="up" data-delay="200">
          "Para que vejam, e saibam, e considerem,<br />
          e entendam juntamente que a mão<br />
          do Senhor fez isso"
        </blockquote>

        <p className="verse__ref" data-anim="up" data-delay="320">Isaías 41:20</p>

        <div className="verse-rule" data-anim="in" data-delay="150"></div>
      </div>
    </section>
  );
}
