import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// CORS設定（API用）
app.use('/api/*', cors())

// 静的ファイルの配信
app.use('/static/*', serveStatic({ root: './public' }))

// レンダラーの設定
app.use(renderer)

// ===== ページルート =====

// トップページ
app.get('/', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

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
              <i className="fas fa-calendar-check" style="margin-right: 0.5rem;"></i>
              無料相談を申し込む
            </a>
            <a href="/cases" className="cta-button cta-button-secondary">
              <i className="fas fa-chart-bar" style="margin-right: 0.5rem;"></i>
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
            <p>建設業界の課題を深く理解し、業界特化型のソリューションを提供。現場の声に基づいた実践的なDX支援を行います。</p>
          </div>
          
          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>投資対効果の可視化</h3>
            <p>導入前にヒアリングを行い、投資対効果を明確に算出。費用対効果を数値で示し、安心してご導入いただけます。</p>
          </div>
          
          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>無料ヒアリング</h3>
            <p>お客様の業務に特化したアプリ開発をご希望の場合は、何度でもヒアリングを無料で実施いたします。</p>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="stats-section">
        <div className="section">
          <h2 className="section-title" style="color: white; margin-bottom: 3rem;">
            数字で見る実績
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number" data-target="50">0</span>
              <div className="stat-label">導入企業数</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-target="85">0</span>
              <div className="stat-label">業務効率化時間（月）</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-target="24">0</span>
              <div className="stat-label">平均サポート時間</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-target="100">0</span>
              <div className="stat-label">顧客満足度（%）</div>
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
            <p>建設業に特化したカスタムアプリケーションの開発と運用サポートを提供。現場のニーズに合わせたソリューションを構築します。</p>
          </div>
          
          <div className="tech-card">
            <h3>業務効率化ツール導入</h3>
            <p>既存の主要業務効率化ツールの導入支援を行い、お客様の業務に合わせてカスタマイズいたします。</p>
          </div>
          
          <div className="tech-card">
            <h3>DX戦略コンサルティング</h3>
            <p>建設業界のデジタル変革をトータルサポート。現状分析から実装まで一貫してサポートします。</p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <p>メール: info@main-character.co.jp</p>
            <p>営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// 会社概要ページ
app.get('/company', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

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
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem 0; font-weight: 600; width: 30%;">会社名</td>
                <td style="padding: 0.75rem 0;">株式会社main character</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem 0; font-weight: 600;">ブランド名</td>
                <td style="padding: 0.75rem 0;">建設テックパートナーズ</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem 0; font-weight: 600;">代表者</td>
                <td style="padding: 0.75rem 0;">代表取締役　北島壮馬</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem 0; font-weight: 600;">設立</td>
                <td style="padding: 0.75rem 0;">2025年6月</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem 0; font-weight: 600;">資本金</td>
                <td style="padding: 0.75rem 0;">10,000円</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 0; font-weight: 600;">所在地</td>
                <td style="padding: 0.75rem 0;">
                  〒814-0001<br />
                  福岡県福岡市早良区百道2-15-1
                </td>
              </tr>
            </table>
          </div>

          <div className="tech-card">
            <h3>事業内容</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9;">
                <i className="fas fa-check text-primary" style="margin-right: 0.5rem;"></i>
                建設現場の生産性向上支援
              </li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9;">
                <i className="fas fa-check text-primary" style="margin-right: 0.5rem;"></i>
                建設業特化DX支援事業
              </li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9;">
                <i className="fas fa-check text-primary" style="margin-right: 0.5rem;"></i>
                カスタムアプリケーション開発
              </li>
              <li style="padding: 0.5rem 0;">
                <i className="fas fa-check text-primary" style="margin-right: 0.5rem;"></i>
                業務効率化ツール導入支援
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョン - 特別セクション */}
      <section className="mission-vision-section">
        <div className="section">
          <h2 className="section-title" style="color: white; margin-bottom: 3rem;">
            私たちのサービス
          </h2>
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <h3>ミッション</h3>
              <p>建設業界のデジタル変革を推進し、現場の生産性向上と働き方改革を実現します。最新のテクノロジーを活用して、伝統ある建設業界に新しい価値を創造します。</p>
            </div>
            
            <div className="mission-vision-card">
              <h3>ビジョン</h3>
              <p>建設業界が抱える人材不足や業務非効率化の課題を、テクノロジーの力で解決し、持続可能で成長力のある業界へと変革することを目指します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <p>メール: info@main-character.co.jp</p>
            <p>営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// 事例紹介ページ
app.get('/cases', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

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
          <div className="tech-card case-item" data-category="app-development">
            <h3>A建設株式会社様</h3>
            <p className="text-primary mb-2">工程管理アプリ開発</p>
            <p><strong>課題：</strong>現場の工程管理が紙ベースで非効率</p>
            <p><strong>解決策：</strong>リアルタイム工程管理アプリの開発</p>
            <p><strong>効果：</strong>工程管理業務時間50%削減、情報共有の迅速化</p>
            <div style="margin-top: 1rem;">
              <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">アプリ開発</span>
            </div>
          </div>

          <div className="tech-card case-item" data-category="efficiency">
            <h3>B工業株式会社様</h3>
            <p className="text-primary mb-2">業務効率化ツール導入</p>
            <p><strong>課題：</strong>見積書作成に時間がかかりすぎる</p>
            <p><strong>解決策：</strong>見積書自動生成システム導入</p>
            <p><strong>効果：</strong>見積書作成時間70%短縮、受注率向上</p>
            <div style="margin-top: 1rem;">
              <span style="background: var(--secondary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">効率化支援</span>
            </div>
          </div>

          <div className="tech-card case-item" data-category="dx-consulting">
            <h3>C建設グループ様</h3>
            <p className="text-primary mb-2">DX戦略コンサルティング</p>
            <p><strong>課題：</strong>全社的なDX化の方向性が不明確</p>
            <p><strong>解決策：</strong>段階的DX実行計画の策定と実装支援</p>
            <p><strong>効果：</strong>全社業務効率30%向上、従業員満足度向上</p>
            <div style="margin-top: 1rem;">
              <span style="background: var(--accent-color); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">DXコンサル</span>
            </div>
          </div>

          <div className="tech-card case-item" data-category="app-development">
            <h3>D足場工事様</h3>
            <p className="text-primary mb-2">現場安全管理アプリ</p>
            <p><strong>課題：</strong>現場の安全チェックが属人化</p>
            <p><strong>解決策：</strong>標準化された安全管理アプリの開発</p>
            <p><strong>効果：</strong>安全事故0件、検査時間40%短縮</p>
            <div style="margin-top: 1rem;">
              <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">アプリ開発</span>
            </div>
          </div>

          <div className="tech-card case-item" data-category="efficiency">
            <h3>E設備工事様</h3>
            <p className="text-primary mb-2">資材在庫管理システム</p>
            <p><strong>課題：</strong>資材の在庫管理が手作業で非効率</p>
            <p><strong>解決策：</strong>QRコード連携在庫管理システム導入</p>
            <p><strong>効果：</strong>在庫確認時間80%削減、資材ロス30%減少</p>
            <div style="margin-top: 1rem;">
              <span style="background: var(--secondary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">効率化支援</span>
            </div>
          </div>

          <div className="tech-card case-item" data-category="dx-consulting">
            <h3>F総合建設様</h3>
            <p className="text-primary mb-2">デジタル化推進支援</p>
            <p><strong>課題：</strong>各部門のシステムが連携していない</p>
            <p><strong>解決策：</strong>統合プラットフォーム構築と段階的移行</p>
            <p><strong>効果：</strong>部門間連携強化、情報共有時間60%短縮</p>
            <div style="margin-top: 1rem;">
              <span style="background: var(--accent-color); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem;">DXコンサル</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="stats-section">
        <div className="section text-center">
          <h2 style="color: white; margin-bottom: 3rem;">
            あなたの会社のDX化も<br />
            一緒に実現しませんか？
          </h2>
          <div className="cta-buttons-container">
            <a href="/contact" className="cta-button">
              <i className="fas fa-calendar-check" style="margin-right: 0.5rem;"></i>
              無料相談を申し込む
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <p>メール: info@main-character.co.jp</p>
            <p>営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// メンバーページ
app.get('/members', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

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
            <div style="text-align: center; margin-bottom: 2rem;">
              <div style="width: 120px; height: 120px; border-radius: 50%; background: var(--gradient-primary); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                <i className="fas fa-user"></i>
              </div>
              <h3 style="margin-bottom: 0.5rem;">北島 壮馬</h3>
              <p className="text-primary" style="font-weight: 600;">代表取締役</p>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">学歴・経歴</h4>
              <ul style="list-style: none; padding: 0; line-height: 1.8;">
                <li>• APU（立命館アジア太平洋大学）在学中</li>
                <li>• エクサウィザーズ（AIスタートアップ）</li>
                <li>• インサイドセールス、フィールドセールス経験</li>
              </ul>
            </div>
            
            <div>
              <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">事業立ち上げへの想い</h4>
              <p style="line-height: 1.6;">
                父が経営する建設業（足場屋）の事務所を訪れた際、人材不足と紙媒体による非効率な業務を目の当たりにしました。
                まずは父の会社の業務効率化から始め、建設業界全体のDX化に貢献したいという想いから起業を決意いたしました。
              </p>
            </div>
          </div>

          {/* エンジニア */}
          <div className="tech-card">
            <div style="text-align: center; margin-bottom: 2rem;">
              <div style="width: 120px; height: 120px; border-radius: 50%; background: var(--gradient-accent); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                <i className="fas fa-code"></i>
              </div>
              <h3 style="margin-bottom: 0.5rem;">下平 陵生</h3>
              <p className="text-primary" style="font-weight: 600;">エンジニア</p>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">学歴・経歴</h4>
              <ul style="list-style: none; padding: 0; line-height: 1.8;">
                <li>• 京都大学 建築学科 在学中</li>
                <li>• 株式会社Base connect エンジニア</li>
                <li>• システム開発・運用経験</li>
              </ul>
            </div>
            
            <div>
              <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">事業立ち上げへの想い</h4>
              <p style="line-height: 1.6;">
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
            <p>建設業界の現場を知る代表と、最新技術に精通するエンジニアが連携。実用性と技術革新を両立したソリューションを提供します。</p>
          </div>
          
          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>現場主義のアプローチ</h3>
            <p>現場の声を直接聞き、実際の業務フローを理解したうえでソリューションを設計。机上の空論ではない実践的な支援を行います。</p>
          </div>
          
          <div className="tech-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>継続的な改善</h3>
            <p>導入後も継続的にヒアリングを行い、システムの改善と最適化を実施。お客様とともに成長するパートナーシップを大切にします。</p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <p>メール: info@main-character.co.jp</p>
            <p>営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// お問い合わせページ
app.get('/contact', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">お問い合わせ</h1>
          <p className="hero-subtitle">
            建設業界のDX化について<br />
            お気軽にご相談ください
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="section">
        <div style="max-width: 800px; margin: 0 auto;">
          <div className="tech-card">
            <h3 style="margin-bottom: 2rem;">無料相談お申し込み</h3>
            
            <form id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="company">会社名 *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="form-input" 
                  required 
                />
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">お名前 *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="position">役職</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    className="form-input" 
                  />
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">メールアドレス *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">電話番号</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="service">ご興味のあるサービス *</label>
                <select id="service" name="service" className="form-input" required>
                  <option value="">選択してください</option>
                  <option value="dx-app">DXアプリ開発・運用</option>
                  <option value="efficiency">業務効率化ツール導入</option>
                  <option value="consulting">DX戦略コンサルティング</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget">予算感</label>
                <select id="budget" name="budget" className="form-input">
                  <option value="">選択してください</option>
                  <option value="under-30">30万円未満</option>
                  <option value="30-50">30万円〜50万円</option>
                  <option value="50-100">50万円〜100万円</option>
                  <option value="100-300">100万円〜300万円</option>
                  <option value="over-300">それ以上</option>
                  <option value="undecided">未定</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="timeline">導入希望時期</label>
                <select id="timeline" name="timeline" className="form-input">
                  <option value="">選択してください</option>
                  <option value="asap">すぐに</option>
                  <option value="1-3months">1〜3ヶ月以内</option>
                  <option value="3-6months">3〜6ヶ月以内</option>
                  <option value="6-12months">6ヶ月〜1年以内</option>
                  <option value="over-1year">1年以上先</option>
                  <option value="undecided">未定</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">お問い合わせ内容 *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-input form-textarea" 
                  placeholder="現在の課題やご要望など、できるだけ詳しくお聞かせください。"
                  required
                ></textarea>
              </div>

              <div style="text-align: center; margin-top: 2rem;">
                <button type="submit" className="cta-button">
                  お問い合わせを送信
                </button>
              </div>
            </form>
          </div>

          {/* お問い合わせ方法 */}
          <div style="margin-top: 3rem;">
            <div className="card-grid">
              <div className="tech-card text-center">
                <div className="feature-icon" style="margin: 0 auto 1rem;">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>メールでのお問い合わせ</h3>
                <p>info@main-character.co.jp</p>
                <p style="font-size: 0.875rem; color: var(--gray-600);">
                  24時間受付<br />
                  3営業日以内にご返信いたします
                </p>
              </div>

              <div className="tech-card text-center">
                <div className="feature-icon" style="margin: 0 auto 1rem;">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>営業時間</h3>
                <p>平日 9:00〜18:00</p>
                <p style="font-size: 0.875rem; color: var(--gray-600);">
                  土日祝日は休業<br />
                  緊急時はメールにてご連絡ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <p>メール: info@main-character.co.jp</p>
            <p>営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// ===== API ルート =====

// プライバシーポリシーページ
app.get('/privacy', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">プライバシーポリシー</h1>
          <p className="hero-subtitle">
            個人情報の取り扱いについて
          </p>
        </div>
      </section>

      {/* プライバシーポリシー内容 */}
      <section className="section">
        <div style="max-width: 800px; margin: 0 auto;">
          <div className="tech-card">
            <div style="line-height: 1.8;">
              <p style="margin-bottom: 2rem;">
                株式会社main character（以下、「当社」）は、以下のとおり個人情報保護方針を定め、
                個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、
                個人情報の保護を推進致します。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第1条（個人情報の管理）</h3>
              <p>
                当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第2条（個人情報の利用目的）</h3>
              <p>お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第3条（個人情報の第三者への開示・提供の禁止）</h3>
              <p>
                当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、
                個人情報を第三者に開示いたしません。
              </p>
              <ul style="margin-left: 2rem; margin-top: 1rem;">
                <li>お客さまの同意がある場合</li>
                <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                <li>法令に基づき開示することが必要である場合</li>
              </ul>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第4条（個人情報の安全対策）</h3>
              <p>
                当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第5条（ご本人の照会）</h3>
              <p>
                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、
                ご本人であることを確認の上、対応させていただきます。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第6条（法令、規範の遵守と見直し）</h3>
              <p>
                当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、
                本ポリシーの内容を適宜見直し、その改善に努めます。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第7条（お問い合せ）</h3>
              <p>
                当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。
              </p>
              <div style="margin-top: 1rem; padding: 1.5rem; background: var(--gray-100); border-radius: 0.5rem;">
                <p style="margin: 0;"><strong>株式会社main character</strong></p>
                <p style="margin: 0;">〒814-0001 福岡県福岡市早良区百道2-15-1</p>
                <p style="margin: 0;">メール：info@main-character.co.jp</p>
              </div>

              <p style="margin-top: 2rem; text-align: right; color: var(--gray-600);">
                制定日：2025年6月1日<br />
                最終更新日：2025年6月1日
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>法的情報</h3>
            <p><a href="/privacy">プライバシーポリシー</a></p>
            <p><a href="/terms">利用規約</a></p>
            <p><a href="/legal">特定商取引法</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// 利用規約ページ
app.get('/terms', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">利用規約</h1>
          <p className="hero-subtitle">
            当サイトのご利用について
          </p>
        </div>
      </section>

      {/* 利用規約内容 */}
      <section className="section">
        <div style="max-width: 800px; margin: 0 auto;">
          <div className="tech-card">
            <div style="line-height: 1.8;">
              <p style="margin-bottom: 2rem;">
                この利用規約（以下、「本規約」）は、株式会社main character（以下、「当社」）がこのウェブサイト上で提供するサービス（以下、「本サービス」）の利用条件を定めるものです。
                登録ユーザーの皆さま（以下、「ユーザー」）には、本規約に従って、本サービスをご利用いただきます。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第1条（適用）</h3>
              <p>
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」）をすることがあります。
                これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第2条（利用登録）</h3>
              <p>
                本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、
                当社がこれを承認することによって、利用登録が完了するものとします。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第3条（ユーザーIDおよびパスワードの管理）</h3>
              <p>
                ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、
                もしくは第三者と共用することはできません。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第4条（禁止事項）</h3>
              <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul style="margin-left: 2rem; margin-top: 1rem;">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>逆アセンブル、逆コンパイル、リバースエンジニアリング等によって本サービスのソースコードを解析する行為</li>
                <li>本サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第5条（本サービスの提供の停止等）</h3>
              <p>
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul style="margin-left: 2rem; margin-top: 1rem;">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第6条（免責事項）</h3>
              <p>
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、
                セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第7条（規約の変更）</h3>
              <p>
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>

              <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem;">第8条（準拠法・裁判管轄）</h3>
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。
                本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>

              <p style="margin-top: 2rem; text-align: right; color: var(--gray-600);">
                制定日：2025年6月1日<br />
                最終更新日：2025年6月1日
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>法的情報</h3>
            <p><a href="/privacy">プライバシーポリシー</a></p>
            <p><a href="/terms">利用規約</a></p>
            <p><a href="/legal">特定商取引法</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// 特定商取引法に基づく表記ページ
app.get('/legal', (c) => {
  return c.render(
    <div>
      {/* ヘッダー */}
      <header className="tech-header">
        <nav className="tech-nav">
          <a href="/" className="tech-logo">建設テックパートナーズ</a>
          <ul className="tech-nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/cases">事例紹介</a></li>
            <li><a href="/members">メンバー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">特定商取引法に基づく表記</h1>
          <p className="hero-subtitle">
            法律に基づく重要事項
          </p>
        </div>
      </section>

      {/* 特定商取引法内容 */}
      <section className="section">
        <div style="max-width: 800px; margin: 0 auto;">
          <div className="tech-card">
            <table style="width: 100%; border-collapse: collapse; line-height: 1.8;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; width: 30%; vertical-align: top;">事業者名</td>
                <td style="padding: 1rem 0;">株式会社main character</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">代表責任者</td>
                <td style="padding: 1rem 0;">代表取締役　北島壮馬</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">所在地</td>
                <td style="padding: 1rem 0;">〒814-0001<br />福岡県福岡市早良区百道2-15-1</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">電話番号</td>
                <td style="padding: 1rem 0;">092-xxx-xxxx<br />（営業時間：平日9:00-18:00）</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">メールアドレス</td>
                <td style="padding: 1rem 0;">info@main-character.co.jp</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">事業内容</td>
                <td style="padding: 1rem 0;">
                  ・建設業特化DXアプリ開発・運用<br />
                  ・建設現場の生産性向上支援<br />
                  ・DX戦略コンサルティング<br />
                  ・業務効率化ツール導入支援
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">サービス提供料金</td>
                <td style="padding: 1rem 0;">
                  各サービスにより異なります。<br />
                  詳細はお問い合わせください。<br />
                  初回コンサルティングは無料です。
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">お支払い方法</td>
                <td style="padding: 1rem 0;">
                  銀行振込<br />
                  ※振込手数料はお客様負担となります
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">サービス提供時期</td>
                <td style="padding: 1rem 0;">
                  契約締結後、個別に定める期日までに提供いたします。<br />
                  詳細はご契約時にご説明いたします。
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">返品・キャンセル</td>
                <td style="padding: 1rem 0;">
                  サービスの性質上、原則として返品・返金はお受けできません。<br />
                  ただし、当社に重大な瑕疵がある場合はこの限りではありません。
                </td>
              </tr>
              <tr>
                <td style="padding: 1rem 0; font-weight: 600; vertical-align: top;">その他</td>
                <td style="padding: 1rem 0;">
                  サービス内容・料金等は予告なく変更する場合があります。<br />
                  最新の情報は当サイトでご確認ください。
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="tech-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>株式会社main character</h3>
            <p>建設テックパートナーズ</p>
            <p>〒814-0001<br />
            福岡県福岡市早良区百道2-15-1</p>
          </div>
          
          <div className="footer-section">
            <h3>サービス</h3>
            <p><a href="/cases">DXアプリ開発・運用</a></p>
            <p><a href="/cases">業務効率化支援</a></p>
            <p><a href="/contact">無料コンサルティング</a></p>
          </div>
          
          <div className="footer-section">
            <h3>企業情報</h3>
            <p><a href="/company">会社概要</a></p>
            <p><a href="/members">メンバー紹介</a></p>
            <p><a href="/contact">お問い合わせ</a></p>
          </div>
          
          <div className="footer-section">
            <h3>法的情報</h3>
            <p><a href="/privacy">プライバシーポリシー</a></p>
            <p><a href="/terms">利用規約</a></p>
            <p><a href="/legal">特定商取引法</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 株式会社main character. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
})

// ===== API ルート =====

// お問い合わせAPI
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    
    // バリデーション
    const requiredFields = ['company', 'name', 'email', 'service', 'message']
    for (const field of requiredFields) {
      if (!body[field]) {
        return c.json({ error: `${field}は必須項目です` }, 400)
      }
    }
    
    // メールアドレスの検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return c.json({ error: '有効なメールアドレスを入力してください' }, 400)
    }
    
    // ここで実際にはメール送信やデータベース保存を行う
    // 今回はログ出力のみ
    console.log('Contact form submission:', {
      company: body.company,
      name: body.name,
      email: body.email,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString()
    })
    
    return c.json({ 
      success: true, 
      message: 'お問い合わせありがとうございます。3営業日以内にご連絡いたします。' 
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ error: 'サーバーエラーが発生しました' }, 500)
  }
})

export default app
