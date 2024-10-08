import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cliet</title>
        <meta name="description" content="This is the dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Cliet!</h1>
        <p className={styles.description}>
          This is the Cliet page content.
        </p>
      </main>

    </div>
  );
}

export default Dashboard;
