import Link from 'next/link';

export default function Header() {
  return (
    <header className="tech-header">
      <nav className="tech-nav">
        <Link href="/" className="tech-logo">
          建設テックパートナーズ
        </Link>
        <ul className="tech-nav-links">
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/company">会社概要</Link></li>
          <li><Link href="/cases">事例紹介</Link></li>
          <li><Link href="/members">メンバー</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
}
