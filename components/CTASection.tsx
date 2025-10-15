import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="stats-section">
      <div className="section text-center">
        <h2 style={{ color: 'white', marginBottom: '3rem' }}>
          あなたの会社のDX化も<br />
          一緒に実現しませんか？
        </h2>
        <div className="cta-buttons-container">
          <Link href="/contact" className="cta-button">
            <i className="fas fa-calendar-check" style={{ marginRight: '0.5rem' }}></i>
            無料相談を申し込む
          </Link>
        </div>
      </div>
    </section>
  );
}
