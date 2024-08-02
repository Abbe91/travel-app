// src/app/sweden/page.tsx
import styles from './Norway.module.css';
import Box from '../components/Box/Box';

const Norway = () => {
  return (
    <div className={styles.container}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Norway</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Box country="Norway" name="Restaurant" />
          <Box country="Norway" name="Museum" />
          <Box country="Norway" name="Cafe" />
          <Box country="Norway" name="Park" />
        </div>
      </div>
    </div>
  );
};

export default Norway;
