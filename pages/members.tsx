import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Members() {
  return (
    <>
      <Head>
        <title>メンバー紹介 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業界のDX化をリードするプロフェッショナルチームをご紹介します。"
        />
      </Head>

      <Header />

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">メンバー紹介</h1>
          <p className="hero-subtitle">
            建設業界のDX化をリードする<br />
            プロフェッショナルチーム
          </p>
        </div>
      </section>

      {/* メンバー紹介 */}
      <section className="section">
        <div className="card-grid">
          {/* 代表取締役 */}
          <div className="tech-card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem',
                }}
              >
                <i className="fas fa-user"></i>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>北島 壮馬</h3>
              <p className="text-primary" style={{ fontWeight: 600 }}>
                代表取締役
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>学歴・経歴</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
                <li>• APU（立命館アジア太平洋大学）在学中</li>
                <li>• エクサウィザーズ（AIスタートアップ）</li>
                <li>• インサイドセールス、フィールドセールス経験</li>
              </ul>
            </div>

            <div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                事業立ち上げへの想い
              </h4>
              <p style={{ lineHeight: 1.6 }}>
                父が経営する建設業（足場屋）の事務所を訪れた際、人材不足と紙媒体による非効率な業務を目の当たりにしました。
                まずは父の会社の業務効率化から始め、建設業界全体のDX化に貢献したいという想いから起業を決意いたしました。
              </p>
            </div>
          </div>

          {/* エンジニア */}
          <div className="tech-card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--gradient-accent)',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem',
                }}
              >
                <i className="fas fa-code"></i>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>下平 陵生</h3>
              <p className="text-primary" style={{ fontWeight: 600 }}>
                エンジニア
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>学歴・経歴</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
                <li>• 京都大学 建築学科 在学中</li>
                <li>• 株式会社Base connect エンジニア</li>
                <li>• システム開発・運用経験</li>
              </ul>
            </div>

            <div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                事業立ち上げへの想い
              </h4>
              <p style={{ lineHeight: 1.6 }}>
                建築学科で学ぶ中で、将来の街づくりへの興味を深めました。
                その街づくりを担う建設業界をテクノロジーで支援し、より良い社会基盤の構築に貢献したいという想いから参加いたしました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* チームの強み */}
      <section className="section">
        <h2 className="section-title">チームの強み</h2>
        <div className="features-grid">
          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>業界理解 × 技術力</h3>
            <p>
              建設業界の現場を知る代表と、最新技術に精通するエンジニアが連携。実用性と技術革新を両立したソリューションを提供します。
            </p>
          </div>

          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>現場主義のアプローチ</h3>
            <p>
              現場の声を直接聞き、実際の業務フローを理解したうえでソリューションを設計。机上の空論ではない実践的な支援を行います。
            </p>
          </div>

          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>継続的な改善</h3>
            <p>
              導入後も継続的にヒアリングを行い、システムの改善と最適化を実施。お客様とともに成長するパートナーシップを大切にします。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
