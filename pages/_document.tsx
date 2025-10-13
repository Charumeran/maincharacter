import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* 構造化データ - 組織情報 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '株式会社main character',
              alternateName: '建設テックパートナーズ',
              url: 'https://main-character.co.jp',
              description: '建設業に特化したDXアプリの開発運用とDX支援を行う企業',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '早良区百道2-15-1',
                addressLocality: '福岡市',
                addressRegion: '福岡県',
                postalCode: '814-0001',
                addressCountry: 'JP',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+81-92-xxx-xxxx',
                contactType: 'customer service',
                email: 'info@main-character.co.jp',
                availableLanguage: 'Japanese',
              },
              foundingDate: '2025-06-01',
              founder: {
                '@type': 'Person',
                name: '北島壮馬',
              },
              industry: '建設業DX支援',
              numberOfEmployees: '2-10',
            }),
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* クッキー同意バナー */}
        <div
          id="cookie-banner"
          style={{
            display: 'none',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'var(--gray-900)',
            color: 'white',
            padding: '1rem',
            zIndex: 9999,
            textAlign: 'center',
          }}
        >
          <p style={{ margin: '0 0 1rem' }}>
            当サイトではサービス向上のためクッキーを使用しています。
            <a
              href="/privacy"
              style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}
            >
              詳細はこちら
            </a>
          </p>
          <button
            id="accept-cookie-button"
            style={{
              background: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            同意する
          </button>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              function acceptCookies() {
                var banner = document.getElementById('cookie-banner');
                if (banner) {
                  banner.style.display = 'none';
                }
                localStorage.setItem('cookies-accepted', 'true');
              }

              // バナーの表示チェック
              if (!localStorage.getItem('cookies-accepted')) {
                var banner = document.getElementById('cookie-banner');
                if (banner) {
                  banner.style.display = 'block';
                }
              }

              // ボタンのイベントリスナーを追加
              var button = document.getElementById('accept-cookie-button');
              if (button) {
                button.addEventListener('click', acceptCookies);
              }
            `,
          }}
        />
      </body>
    </Html>
  );
}
