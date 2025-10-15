interface CaseStudy {
  company: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  tag: string;
  tagColor: string;
}

export default function CaseStudies() {
  const cases: CaseStudy[] = [
    {
      company: '株式会社櫻建様',
      category: 'DX戦略コンサルティング',
      problem: '全社的なDX化の方向性が不明確',
      solution: '段階的DX実行計画の策定と実装支援',
      result: '全社業務効率向上、従業員満足度向上',
      tag: 'DXコンサル',
      tagColor: 'var(--accent-color)'
    },
    {
      company: '株式会社天昇興業様',
      category: '資材発注アプリ開発',
      problem: '資材発注書が紙ベースで非効率',
      solution: 'ボタン操作で簡単に資材発注書が作成できるアプリの開発',
      result: '資材発注書作成時間の大幅削減、資材発注ミスの削減',
      tag: 'アプリ開発',
      tagColor: 'var(--primary-color)'
    },
    {
      company: '株式会社矢野工業様',
      category: '業務効率化ツール導入',
      problem: '見積書作成に時間がかかりすぎる',
      solution: '見積書自動生成システム導入',
      result: '見積書作成時間短縮、受注率向上',
      tag: '効率化支援',
      tagColor: 'var(--secondary-color)'
    },
    {
      company: '株式会社成起様',
      category: '積載確認書管理アプリ',
      problem: '紙媒体での管理により積載確認書の紛失',
      solution: '時系列・現場・作成者ごとに積載確認書を管理するアプリの開発',
      result: '安全事故0件、検査時間40%短縮',
      tag: 'アプリ開発',
      tagColor: 'var(--primary-color)'
    },
    {
      company: '株式会社神ノ興業様',
      category: '資材在庫管理システム',
      problem: '資材の在庫管理が手作業で非効率',
      solution: 'QRコード連携在庫管理システム導入',
      result: '在庫確認時間削減、資材ロス減少',
      tag: '効率化支援',
      tagColor: 'var(--secondary-color)'
    },
  ];

  return (
    <section className="section">
      <div className="card-grid">
        {cases.map((caseStudy, index) => (
          <div key={index} className="tech-card">
            <h3>{caseStudy.company}</h3>
            <p className="text-primary mb-2">{caseStudy.category}</p>
            <p>
              <strong>課題：</strong>{caseStudy.problem}
            </p>
            <p>
              <strong>解決策：</strong>{caseStudy.solution}
            </p>
            <p>
              <strong>効果：</strong>{caseStudy.result}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  background: caseStudy.tagColor,
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                {caseStudy.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
