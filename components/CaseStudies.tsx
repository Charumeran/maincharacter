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
      category: '工程管理アプリ開発',
      problem: '現場の工程管理が紙ベースで非効率',
      solution: 'リアルタイム工程管理アプリの開発',
      result: '工程管理業務時間50%削減、情報共有の迅速化',
      tag: 'アプリ開発',
      tagColor: 'var(--primary-color)'
    },
    {
      company: 'B工業株式会社様',
      category: '業務効率化ツール導入',
      problem: '見積書作成に時間がかかりすぎる',
      solution: '見積書自動生成システム導入',
      result: '見積書作成時間70%短縮、受注率向上',
      tag: '効率化支援',
      tagColor: 'var(--secondary-color)'
    },
    {
      company: 'C建設グループ様',
      category: 'DX戦略コンサルティング',
      problem: '全社的なDX化の方向性が不明確',
      solution: '段階的DX実行計画の策定と実装支援',
      result: '全社業務効率30%向上、従業員満足度向上',
      tag: 'DXコンサル',
      tagColor: 'var(--accent-color)'
    },
    {
      company: 'D足場工事様',
      category: '現場安全管理アプリ',
      problem: '現場の安全チェックが属人化',
      solution: '標準化された安全管理アプリの開発',
      result: '安全事故0件、検査時間40%短縮',
      tag: 'アプリ開発',
      tagColor: 'var(--primary-color)'
    },
    {
      company: 'E設備工事様',
      category: '資材在庫管理システム',
      problem: '資材の在庫管理が手作業で非効率',
      solution: 'QRコード連携在庫管理システム導入',
      result: '在庫確認時間80%削減、資材ロス30%減少',
      tag: '効率化支援',
      tagColor: 'var(--secondary-color)'
    },
    {
      company: 'F総合建設様',
      category: 'デジタル化推進支援',
      problem: '各部門のシステムが連携していない',
      solution: '統合プラットフォーム構築と段階的移行',
      result: '部門間連携強化、情報共有時間60%短縮',
      tag: 'DXコンサル',
      tagColor: 'var(--accent-color)'
    }
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
