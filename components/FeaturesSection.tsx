export default function FeaturesSection() {
  const features = [
    {
      icon: 'fas fa-hard-hat',
      title: '建設業界特化',
      description: '建設業界の課題を深く理解し、業界特化型のソリューションを提供。現場の声に基づいた実践的なDX支援を行います。'
    },
    {
      icon: 'fas fa-chart-line',
      title: '投資対効果の可視化',
      description: '導入前にヒアリングを行い、投資対効果を明確に算出。費用対効果を数値で示し、安心してご導入いただけます。'
    },
    {
      icon: 'fas fa-handshake',
      title: '無料ヒアリング',
      description: 'お客様の業務に特化したアプリ開発をご希望の場合は、何度でもヒアリングを無料で実施いたします。'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">選ばれる3つの理由</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="tech-card">
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
