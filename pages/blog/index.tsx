import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client, Blog } from '@/lib/microcms';
import styles from '@/styles/Blog.module.css';

type Props = {
  blogs: Blog[];
};

export default function BlogList({ blogs }: Props) {
  return (
    <>
      <Head>
        <title>ブログ | 建設テックパートナーズ - 株式会社main character</title>
        <meta
          name="description"
          content="建設業界のDX化、生産性向上に関する情報を発信しています。最新のテクノロジー動向や事例をご紹介します。"
        />
        <meta
          name="keywords"
          content="建設業,DX,ブログ,テクノロジー,生産性向上,業務効率化"
        />
      </Head>

      <Header />

      <main className={styles.blogMain}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>ブログ</h1>
            <p className={styles.description}>
              建設業界のDX化や生産性向上に関する情報を発信しています
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className={styles.empty}>
              <p>記事がまだありません</p>
            </div>
          ) : (
            <div className={styles.blogList}>
              {blogs.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id} className={styles.blogCard}>
                  {blog.eyecatch && (
                    <div className={styles.eyecatch}>
                      <Image
                        src={blog.eyecatch.url}
                        alt={blog.title}
                        width={blog.eyecatch.width}
                        height={blog.eyecatch.height}
                      />
                    </div>
                  )}
                  <div className={styles.content}>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                    <div className={styles.meta}>
                      {blog.category && (
                        <span className={styles.category}>{blog.category.name}</span>
                      )}
                      <time className={styles.date}>
                        {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await client.get({
      endpoint: 'blogs',
      queries: {
        orders: '-publishedAt',
        limit: 100,
      },
    });

    return {
      props: {
        blogs: data.contents,
      },
      revalidate: 60, // ISR: 60秒ごとに再生成
    };
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return {
      props: {
        blogs: [],
      },
      revalidate: 60,
    };
  }
};
