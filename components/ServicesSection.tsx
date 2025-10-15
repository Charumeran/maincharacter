export default function ServicesSection() {
  const services = [
    {
      title: 'DXアプリ開発・運用',
      description: '建設業に特化したカスタムアプリケーションの開発と運用サポートを提供。現場のニーズに合わせたソリューションを構築します。'
    },
    {
      title: '業務効率化ツール導入',
      description: '既存の主要業務効率化ツールの導入支援を行い、お客様の業務に合わせてカスタマイズいたします。'
    },
    {
      title: 'DX戦略コンサルティング',
      description: '建設業界のデジタル変革をトータルサポート。現状分析から実装まで一貫してサポートします。'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">主要サービス</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div key={index} className="tech-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
