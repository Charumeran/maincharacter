import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Cases() {
  return (
    <>
      <Head>
        <title>導入事例 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業界のDX化を成功に導いた実際の導入事例をご紹介します。"
        />
      </Head>

      <Header />

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">導入事例</h1>
          <p className="hero-subtitle">
            建設業界のDX化を成功に導いた<br />
            実際の導入事例をご紹介
          </p>
        </div>
      </section>

      {/* 事例紹介 */}
      <section className="section">
        <div className="card-grid">
          <div className="tech-card">
            <h3>A建設株式会社様</h3>
            <p className="text-primary mb-2">工程管理アプリ開発</p>
            <p>
              <strong>課題：</strong>現場の工程管理が紙ベースで非効率
            </p>
            <p>
              <strong>解決策：</strong>リアルタイム工程管理アプリの開発
            </p>
            <p>
              <strong>効果：</strong>工程管理業務時間50%削減、情報共有の迅速化
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                アプリ開発
              </span>
            </div>
          </div>

          <div className="tech-card">
            <h3>B工業株式会社様</h3>
            <p className="text-primary mb-2">業務効率化ツール導入</p>
            <p>
              <strong>課題：</strong>見積書作成に時間がかかりすぎる
            </p>
            <p>
              <strong>解決策：</strong>見積書自動生成システム導入
            </p>
            <p>
              <strong>効果：</strong>見積書作成時間70%短縮、受注率向上
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: 'var(--secondary-color)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                効率化支援
              </span>
            </div>
          </div>

          <div className="tech-card">
            <h3>C建設グループ様</h3>
            <p className="text-primary mb-2">DX戦略コンサルティング</p>
            <p>
              <strong>課題：</strong>全社的なDX化の方向性が不明確
            </p>
            <p>
              <strong>解決策：</strong>段階的DX実行計画の策定と実装支援
            </p>
            <p>
              <strong>効果：</strong>全社業務効率30%向上、従業員満足度向上
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: 'var(--accent-color)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                DXコンサル
              </span>
            </div>
          </div>

          <div className="tech-card">
            <h3>D足場工事様</h3>
            <p className="text-primary mb-2">現場安全管理アプリ</p>
            <p>
              <strong>課題：</strong>現場の安全チェックが属人化
            </p>
            <p>
              <strong>解決策：</strong>標準化された安全管理アプリの開発
            </p>
            <p>
              <strong>効果：</strong>安全事故0件、検査時間40%短縮
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                アプリ開発
              </span>
            </div>
          </div>

          <div className="tech-card">
            <h3>E設備工事様</h3>
            <p className="text-primary mb-2">資材在庫管理システム</p>
            <p>
              <strong>課題：</strong>資材の在庫管理が手作業で非効率
            </p>
            <p>
              <strong>解決策：</strong>QRコード連携在庫管理システム導入
            </p>
            <p>
              <strong>効果：</strong>在庫確認時間80%削減、資材ロス30%減少
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: 'var(--secondary-color)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                効率化支援
              </span>
            </div>
          </div>

          <div className="tech-card">
            <h3>F総合建設様</h3>
            <p className="text-primary mb-2">デジタル化推進支援</p>
            <p>
              <strong>課題：</strong>各部門のシステムが連携していない
            </p>
            <p>
              <strong>解決策：</strong>統合プラットフォーム構築と段階的移行
            </p>
            <p>
              <strong>効果：</strong>部門間連携強化、情報共有時間60%短縮
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: 'var(--accent-color)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                DXコンサル
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="stats-section">
        <div className="section text-center">
          <h2 style={{ color: 'white', marginBottom: '3rem' }}>
            あなたの会社のDX化も<br />
            一緒に実現しませんか？
          </h2>
          <div className="cta-buttons-container">
            <a href="/contact" className="cta-button">
              <i className="fas fa-calendar-check" style={{ marginRight: '0.5rem' }}></i>
              無料相談を申し込む
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
