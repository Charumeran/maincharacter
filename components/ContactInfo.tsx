export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'メールでのお問い合わせ',
      mainInfo: 'info@main-character.co.jp',
      subInfo: '24時間受付<br />3営業日以内にご返信いたします'
    },
    {
      icon: 'fas fa-clock',
      title: '営業時間',
      mainInfo: '平日 9:00〜18:00',
      subInfo: '土日祝日は休業<br />緊急時はメールにてご連絡ください'
    }
  ];

  return (
    <div style={{ marginTop: '3rem' }}>
      <div className="card-grid">
        {contactMethods.map((method, index) => (
          <div key={index} className="tech-card text-center">
            <div className="feature-icon" style={{ margin: '0 auto 1rem' }}>
              <i className={method.icon}></i>
            </div>
            <h3>{method.title}</h3>
            <p>{method.mainInfo}</p>
            <p
              style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}
              dangerouslySetInnerHTML={{ __html: method.subInfo }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
