export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">

        {/* logo real no footer */}
        <div className="footer__logo" data-anim="sc">
          <img src="/fotos/logo-900.png" alt="Erik e Mikaela — Monograma E|M" />
        </div>

        <div className="footer__rule" data-anim="in" data-delay="100"></div>

        <p className="footer__date" data-anim="up" data-delay="150">19 · 09 · 2026</p>

        <p className="footer__blessing" data-anim="up" data-delay="250">
          Que a mão do Senhor abençoe esta união
        </p>

      </div>
    </footer>
  );
}
