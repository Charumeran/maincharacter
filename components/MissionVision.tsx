export default function MissionVision() {
  const items = [
    {
      icon: 'fas fa-bullseye',
      title: 'ミッション',
      content: '建設業界のデジタル変革を推進し、現場の生産性向上と働き方改革を実現します。最新のテクノロジーを活用して、伝統ある建設業界に新しい価値を創造します。'
    },
    {
      icon: 'fas fa-eye',
      title: 'ビジョン',
      content: '建設業界が抱える人材不足や業務非効率化の課題を、テクノロジーの力で解決し、持続可能で成長力のある業界へと変革することを目指します。'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">ミッション・ビジョン</h2>
      <div className="features-grid">
        {items.map((item, index) => (
          <div key={index} className="tech-card">
            <div className="feature-icon">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
