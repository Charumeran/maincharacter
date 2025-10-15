'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // メニューが開いているときは背景のスクロールを防止
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="tech-header">
      <nav className="tech-nav">
        <Link href="/" className="tech-logo">
          建設テックパートナーズ
        </Link>

        {/* ハンバーガーメニューボタン */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* ナビゲーションリンク */}
        <ul className={`tech-nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>ホーム</Link></li>
          <li><Link href="/company" onClick={closeMenu}>会社概要</Link></li>
          <li><Link href="/cases" onClick={closeMenu}>事例紹介</Link></li>
          <li><Link href="/members" onClick={closeMenu}>メンバー</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>お問い合わせ</Link></li>
        </ul>
      </nav>

      {/* モバイルメニューオーバーレイ */}
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
