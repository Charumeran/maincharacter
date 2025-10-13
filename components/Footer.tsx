import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="tech-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>株式会社main character</h3>
          <p>建設テックパートナーズ</p>
          <p>
            〒814-0001<br />
            福岡県福岡市早良区百道2-15-1
          </p>
        </div>

        <div className="footer-section">
          <h3>サービス</h3>
          <p><Link href="/cases">DXアプリ開発・運用</Link></p>
          <p><Link href="/cases">業務効率化支援</Link></p>
          <p><Link href="/contact">無料コンサルティング</Link></p>
        </div>

        <div className="footer-section">
          <h3>企業情報</h3>
          <p><Link href="/company">会社概要</Link></p>
          <p><Link href="/members">メンバー紹介</Link></p>
          <p><Link href="/contact">お問い合わせ</Link></p>
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
  );
}
