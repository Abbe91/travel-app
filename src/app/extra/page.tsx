// src/pages/extra.tsx

import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Extra: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Extra Page</title>
        <meta name="description" content="This is the extra page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Extra Page!</h1>
        <p className={styles.description}>
          This is the extra page content.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Extra;
