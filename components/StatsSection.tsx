export default function StatsSection() {
  const stats = [
    { number: '50+', label: '導入企業数' },
    { number: '85h', label: '業務効率化時間（月）' },
    { number: '24h', label: '平均サポート時間' },
    { number: '100%', label: '顧客満足度' }
  ];

  return (
    <section className="stats-section">
      <div className="section">
        <h2 className="section-title" style={{ color: 'white', marginBottom: '3rem' }}>
          数字で見る実績
        </h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
