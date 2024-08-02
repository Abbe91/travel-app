import Head from 'next/head';
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth';
import styles from '../styles/Home.module.css';

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div className={styles.container}>
      <Head>
        <title>My Custom Homepage</title>
        <meta name="description" content="Welcome to my custom homepage built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Website!</h1>
        <p className={styles.description}>
          This is a custom homepage built with Next.js.
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Learn more about who I am and what I do.</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Check out some of my recent work and projects.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Read my latest articles and blog posts.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Get in touch with me for collaborations or inquiries.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
