export default function TeamStrengths() {
  const strengths = [
    {
      icon: 'fas fa-lightbulb',
      title: '業界理解 × 技術力',
      description: '建設業界の現場を知る代表と、最新技術に精通するエンジニアが連携。実用性と技術革新を両立したソリューションを提供します。'
    },
    {
      icon: 'fas fa-users',
      title: '現場主義のアプローチ',
      description: '現場の声を直接聞き、実際の業務フローを理解したうえでソリューションを設計。机上の空論ではない実践的な支援を行います。'
    },
    {
      icon: 'fas fa-rocket',
      title: '継続的な改善',
      description: '導入後も継続的にヒアリングを行い、システムの改善と最適化を実施。お客様とともに成長するパートナーシップを大切にします。'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">チームの強み</h2>
      <div className="features-grid">
        {strengths.map((strength, index) => (
          <div key={index} className="tech-card">
            <div className="feature-icon">
              <i className={strength.icon}></i>
            </div>
            <h3>{strength.title}</h3>
            <p>{strength.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
