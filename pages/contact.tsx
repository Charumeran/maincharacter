import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export default function Contact() {
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
      <PageHero
        title="お問い合わせ"
        subtitle="建設業界のDX化について<br />お気軽にご相談ください"
      />

      <ContactForm />
      <ContactInfo />
      <Footer />
    </>
  );
}
