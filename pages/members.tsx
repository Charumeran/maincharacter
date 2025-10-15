import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import MemberProfiles from '@/components/MemberProfiles';
import TeamStrengths from '@/components/TeamStrengths';

export default function Members() {
  return (
    <>
      <Head>
        <title>メンバー紹介 | 建設テックパートナーズ</title>
        <meta
          name="description"
          content="建設業界のDX化をリードするプロフェッショナルチームをご紹介します。"
        />
      </Head>

      <Header />
      <PageHero
        title="メンバー紹介"
        subtitle="建設業界のDX化をリードする<br />プロフェッショナルチーム"
      />

      <MemberProfiles />
      <TeamStrengths />
      <Footer />
    </>
  );
}
