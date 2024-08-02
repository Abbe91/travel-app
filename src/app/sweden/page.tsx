// src/app/sweden/page.tsx

import Box from '../components/Box/Box';
import styles from './Sweden.module.css';

const Sweden = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold text-center mb-8">Explore Sweden</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Box country="Sweden" name="Restaurant" />
        <Box country="Sweden" name="Museum" />
        <Box country="Sweden" name="Cafe" />
        <Box country="Sweden" name="Park" />
      </div>
    </div>
  );
};

export default Sweden;
