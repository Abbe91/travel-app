// src/app/components/Box.tsx

import styles from './Box.module.css';

type BoxProps = {
  country: string;
  name: string;
};

const Box: React.FC<BoxProps> = ({ country, name }) => {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>{name} in {country}</h3>
      <p className={styles.description}>Explore the best {name.toLowerCase()} in {country}.</p>
    </div>
  );
};

export default Box;
