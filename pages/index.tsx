import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>建設テックパートナーズ | 株式会社main character - 建設業特化DX支援</title>
        <meta
          name="description"
          content="建設業に特化したDXアプリの開発運用とDX支援を行う株式会社main character。九州・福岡を拠点に建設現場の生産性向上をサポートします。無料相談実施中。"
        />
        <meta
          name="keywords"
          content="建設業,DX,システム開発,九州,福岡,業務効率化,生産性向上,建設テック,アプリ開発"
        />
      </Head>

      <Header />

      {/* ヒーローセクション */}
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
            <a href="/contact" className="cta-button">
              <i className="fas fa-calendar-check" style={{ marginRight: '0.5rem' }}></i>
              無料相談を申し込む
            </a>
            <a href="/cases" className="cta-button cta-button-secondary">
              <i className="fas fa-chart-bar" style={{ marginRight: '0.5rem' }}></i>
              導入事例を見る
            </a>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="section">
        <h2 className="section-title">選ばれる3つの理由</h2>
        <div className="features-grid">
          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-hard-hat"></i>
            </div>
            <h3>建設業界特化</h3>
            <p>
              建設業界の課題を深く理解し、業界特化型のソリューションを提供。現場の声に基づいた実践的なDX支援を行います。
            </p>
          </div>

          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>投資対効果の可視化</h3>
            <p>
              導入前にヒアリングを行い、投資対効果を明確に算出。費用対効果を数値で示し、安心してご導入いただけます。
            </p>
          </div>

          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>無料ヒアリング</h3>
            <p>
              お客様の業務に特化したアプリ開発をご希望の場合は、何度でもヒアリングを無料で実施いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="stats-section">
        <div className="section">
          <h2 className="section-title" style={{ color: 'white', marginBottom: '3rem' }}>
            数字で見る実績
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <div className="stat-label">導入企業数</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">85h</span>
              <div className="stat-label">業務効率化時間（月）</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <div className="stat-label">平均サポート時間</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <div className="stat-label">顧客満足度</div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="section">
        <h2 className="section-title">主要サービス</h2>
        <div className="card-grid">
          <div className="tech-card">
            <h3>DXアプリ開発・運用</h3>
            <p>
              建設業に特化したカスタムアプリケーションの開発と運用サポートを提供。現場のニーズに合わせたソリューションを構築します。
            </p>
          </div>

          <div className="tech-card">
            <h3>業務効率化ツール導入</h3>
            <p>
              既存の主要業務効率化ツールの導入支援を行い、お客様の業務に合わせてカスタマイズいたします。
            </p>
          </div>

          <div className="tech-card">
            <h3>DX戦略コンサルティング</h3>
            <p>
              建設業界のデジタル変革をトータルサポート。現状分析から実装まで一貫してサポートします。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
