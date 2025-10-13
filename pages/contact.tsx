import Head from 'next/head';
import { useState, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          company: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'エラーが発生しました');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('送信に失敗しました。もう一度お試しください。');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>お問い合わせ | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業界のDX化についてお気軽にご相談ください。無料相談実施中。"
        />
      </Head>

      <Header />

      {/* ページヒーロー */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">お問い合わせ</h1>
          <p className="hero-subtitle">
            建設業界のDX化について<br />
            お気軽にご相談ください
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="tech-card">
            <h3 style={{ marginBottom: '2rem' }}>無料相談お申し込み</h3>

            {status === 'success' && (
              <div
                style={{
                  background: '#d1fae5',
                  color: '#065f46',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem',
                }}
              >
                お問い合わせありがとうございます。3営業日以内にご連絡いたします。
              </div>
            )}

            {status === 'error' && (
              <div
                style={{
                  background: '#fee2e2',
                  color: '#991b1b',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem',
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="company">
                  会社名 *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="position">
                    役職
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="form-input"
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="service">
                  ご興味のあるサービス *
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="dx-app">DXアプリ開発・運用</option>
                  <option value="efficiency">業務効率化ツール導入</option>
                  <option value="consulting">DX戦略コンサルティング</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget">
                  予算感
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="form-input"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">選択してください</option>
                  <option value="under-30">30万円未満</option>
                  <option value="30-50">30万円〜50万円</option>
                  <option value="50-100">50万円〜100万円</option>
                  <option value="100-300">100万円〜300万円</option>
                  <option value="over-300">それ以上</option>
                  <option value="undecided">未定</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="timeline">
                  導入希望時期
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="form-input"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">選択してください</option>
                  <option value="asap">すぐに</option>
                  <option value="1-3months">1〜3ヶ月以内</option>
                  <option value="3-6months">3〜6ヶ月以内</option>
                  <option value="6-12months">6ヶ月〜1年以内</option>
                  <option value="over-1year">1年以上先</option>
                  <option value="undecided">未定</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  お問い合わせ内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="現在の課題やご要望など、できるだけ詳しくお聞かせください。"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  type="submit"
                  className="cta-button"
                  disabled={status === 'loading'}
                  style={{ cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'loading' ? '送信中...' : 'お問い合わせを送信'}
                </button>
              </div>
            </form>
          </div>

          {/* お問い合わせ方法 */}
          <div style={{ marginTop: '3rem' }}>
            <div className="card-grid">
              <div className="tech-card text-center">
                <div className="feature-icon" style={{ margin: '0 auto 1rem' }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>メールでのお問い合わせ</h3>
                <p>info@main-character.co.jp</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  24時間受付<br />
                  3営業日以内にご返信いたします
                </p>
              </div>

              <div className="tech-card text-center">
                <div className="feature-icon" style={{ margin: '0 auto 1rem' }}>
                  <i className="fas fa-clock"></i>
                </div>
                <h3>営業時間</h3>
                <p>平日 9:00〜18:00</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  土日祝日は休業<br />
                  緊急時はメールにてご連絡ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
