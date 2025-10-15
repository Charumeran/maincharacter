import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CompanyInfo from '@/components/CompanyInfo';
import MissionVision from '@/components/MissionVision';

export default function Company() {
  return (
    <>
      <Head>
        <title>会社概要 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="株式会社main characterの会社概要。建設業界のDX化をリードする企業情報をご紹介します。"
        />
      </Head>

      <Header />
      <PageHero
        title="会社概要"
        subtitle="建設業界のDX化をリードする<br />株式会社main characterについて"
      />

      <CompanyInfo />
      <MissionVision />
      <Footer />
    </>
  );
}
