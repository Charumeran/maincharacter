interface Member {
  name: string;
  position: string;
  icon: string;
  gradient: string;
  education: string[];
  vision: string;
}

export default function MemberProfiles() {
  const members: Member[] = [
    {
      name: '北島 壮馬',
      position: '代表取締役',
      icon: 'fas fa-user',
      gradient: 'var(--gradient-primary)',
      education: [
        'APU（立命館アジア太平洋大学）在学中',
        'エクサウィザーズ（AIスタートアップ）',
        'インサイドセールス、フィールドセールス経験'
      ],
      vision: '父が経営する建設業（足場屋）の事務所を訪れた際、人材不足と紙媒体による非効率な業務を目の当たりにしました。まずは父の会社の業務効率化から始め、建設業界全体のDX化に貢献したいという想いから起業を決意いたしました。'
    },
    {
      name: '下平 陵生',
      position: 'エンジニア',
      icon: 'fas fa-code',
      gradient: 'var(--gradient-accent)',
      education: [
        '京都大学 建築学科 在学中',
        '株式会社Base connect エンジニア',
        'システム開発・運用経験'
      ],
      vision: '建築学科で学ぶ中で、将来の街づくりへの興味を深めました。その街づくりを担う建設業界をテクノロジーで支援し、より良い社会基盤の構築に貢献したいという想いから参加いたしました。'
    }
  ];

  return (
    <section className="section">
      <div className="card-grid">
        {members.map((member, index) => (
          <div key={index} className="tech-card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: member.gradient,
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem',
                }}
              >
                <i className={member.icon}></i>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
              <p className="text-primary" style={{ fontWeight: 600 }}>
                {member.position}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                学歴・経歴
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
                {member.education.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                事業立ち上げへの想い
              </h4>
              <p style={{ lineHeight: 1.6 }}>{member.vision}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
