import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Company() {
  return (
    <>
      <Head>
        <title>会社概要 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="株式会社main characterの会社概要。建設業界のDX化をリードする企業情報をご紹介します。"
        />
      </Head>

      <Header />

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">会社概要</h1>
          <p className="hero-subtitle">
            建設業界のDX化をリードする<br />
            株式会社main characterについて
          </p>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="section company-info-section">
        <div className="card-grid">
          <div className="tech-card">
            <h3>会社概要</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 0', fontWeight: 600, width: '30%' }}>会社名</td>
                  <td style={{ padding: '0.75rem 0' }}>株式会社main character</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 0', fontWeight: 600 }}>ブランド名</td>
                  <td style={{ padding: '0.75rem 0' }}>建設テックパートナーズ</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 0', fontWeight: 600 }}>代表者</td>
                  <td style={{ padding: '0.75rem 0' }}>代表取締役　北島壮馬</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 0', fontWeight: 600 }}>設立</td>
                  <td style={{ padding: '0.75rem 0' }}>2025年6月</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 0', fontWeight: 600 }}>資本金</td>
                  <td style={{ padding: '0.75rem 0' }}>10,000円</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0', fontWeight: 600 }}>所在地</td>
                  <td style={{ padding: '0.75rem 0' }}>
                    〒814-0001<br />
                    福岡県福岡市早良区百道2-15-1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tech-card">
            <h3>事業内容</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>
                <i className="fas fa-check text-primary" style={{ marginRight: '0.5rem' }}></i>
                建設現場の生産性向上支援
              </li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>
                <i className="fas fa-check text-primary" style={{ marginRight: '0.5rem' }}></i>
                建設業特化DX支援事業
              </li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>
                <i className="fas fa-check text-primary" style={{ marginRight: '0.5rem' }}></i>
                カスタムアプリケーション開発
              </li>
              <li style={{ padding: '0.5rem 0' }}>
                <i className="fas fa-check text-primary" style={{ marginRight: '0.5rem' }}></i>
                業務効率化ツール導入支援
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョン */}
      <section className="mission-vision-section">
        <div className="section">
          <h2 className="section-title" style={{ color: 'white', marginBottom: '3rem' }}>
            私たちのサービス
          </h2>
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <h3>ミッション</h3>
              <p>
                建設業界のデジタル変革を推進し、現場の生産性向上と働き方改革を実現します。最新のテクノロジーを活用して、伝統ある建設業界に新しい価値を創造します。
              </p>
            </div>

            <div className="mission-vision-card">
              <h3>ビジョン</h3>
              <p>
                建設業界が抱える人材不足や業務非効率化の課題を、テクノロジーの力で解決し、持続可能で成長力のある業界へと変革することを目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
