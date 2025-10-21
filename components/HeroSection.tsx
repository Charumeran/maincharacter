import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          建設業界のDX化を<br />
          ともに実現します
        </h1>
        <p className="hero-subtitle">
          建設テックパートナーズは、建設業に特化したDXアプリの開発運用と<br />
          DX支援を通じて、建設現場の生産性向上をサポートします。
        </p>
        <div className="cta-buttons-container">
          <Link href="/contact" className="cta-button">
            <i className="fas fa-calendar-check" style={{ marginRight: '0.5rem' }}></i>
            無料相談を申し込む
          </Link>
          <Link href="/cases" className="cta-button">
            <i className="fas fa-chart-bar" style={{ marginRight: '0.5rem' }}></i>
            導入事例を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
