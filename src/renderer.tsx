import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description, keywords, canonical }) => {
  const defaultTitle = '建設テックパートナーズ | 株式会社main character - 建設業特化DX支援'
  const defaultDescription = '建設業に特化したDXアプリの開発運用とDX支援を行う株式会社main character。九州・福岡を拠点に建設現場の生産性向上をサポートします。無料相談実施中。'
  const defaultKeywords = '建設業,DX,システム開発,九州,福岡,業務効率化,生産性向上,建設テック,アプリ開発'
  
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO メタタグ */}
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="author" content="株式会社main character" />
        
        {/* Open Graph メタタグ */}
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical || 'https://main-character.co.jp'} />
        <meta property="og:site_name" content="建設テックパートナーズ" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card メタタグ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        
        {/* CSS */}
        <link href="/static/main.css" rel="stylesheet" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* 構造化データ - 組織情報 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "株式会社main character",
            "alternateName": "建設テックパートナーズ",
            "url": "https://main-character.co.jp",
            "logo": "https://main-character.co.jp/static/logo.png",
            "description": "建設業に特化したDXアプリの開発運用とDX支援を行う企業",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "早良区百道2-15-1",
              "addressLocality": "福岡市",
              "addressRegion": "福岡県",
              "postalCode": "814-0001",
              "addressCountry": "JP"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+81-92-xxx-xxxx",
              "contactType": "customer service",
              "email": "info@main-character.co.jp",
              "availableLanguage": "Japanese"
            },
            "foundingDate": "2025-06-01",
            "founder": {
              "@type": "Person",
              "name": "北島壮馬"
            },
            "industry": "建設業DX支援",
            "numberOfEmployees": "2-10",
            "sameAs": []
          })}
        </script>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} />
      </head>
      <body>
        {children}
        
        {/* JavaScript */}
        <script src="/static/main.js"></script>
        
        {/* クッキー同意バナー */}
        <div id="cookie-banner" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; background: var(--gray-900); color: white; padding: 1rem; z-index: 9999; text-align: center;">
          <p style="margin: 0 0 1rem;">
            当サイトではサービス向上のためクッキーを使用しています。
            <a href="/privacy" style="color: var(--primary-light); text-decoration: underline;">詳細はこちら</a>
          </p>
          <button onclick="acceptCookies()" style="background: var(--primary-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">
            同意する
          </button>
        </div>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            function acceptCookies() {
              document.getElementById('cookie-banner').style.display = 'none';
              localStorage.setItem('cookies-accepted', 'true');
            }
            
            if (!localStorage.getItem('cookies-accepted')) {
              document.getElementById('cookie-banner').style.display = 'block';
            }
          `
        }} />
      </body>
    </html>
  )
})
