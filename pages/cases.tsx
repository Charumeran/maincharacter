import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CaseStudies from '@/components/CaseStudies';
import CTASection from '@/components/CTASection';

export default function Cases() {
  return (
    <>
      <Head>
        <title>導入事例 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業界のDX化を成功に導いた実際の導入事例をご紹介します。"
        />
      </Head>

      <Header />
      <PageHero
        title="導入事例"
        subtitle="建設業界のDX化を成功に導いた<br />実際の導入事例をご紹介"
      />

      <CaseStudies />
      <CTASection />
      <Footer />
    </>
  );
}
