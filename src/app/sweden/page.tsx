import Link from 'next/link';
import Box from '../components/Box/Box';
import styles from './Sweden.module.css';

const Sweden = () => {
  return (
    <div className={styles.container}>
    <div className={styles.innerContainer}>
      <h1 className={styles.title}>Explore Sweden</h1>
      <Link href="/sweden/favorites">
        <p className={styles.favoritesLink}>View Your Favorites</p>
      </Link>
      <div className={styles.grid}>
        <Box country="Sweden" name="Restaurant" />
        <Box country="Sweden" name="Museum" />
        <Box country="Sweden" name="Cafe" />
        <Box country="Sweden" name="Park" />
      </div>
    </div>
  </div>
  );
};

export default Sweden;
