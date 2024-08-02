import Box from '../Box/Box';
import styles from './CountryPage.module.css';

type CountryPageProps = {
  country: string;
};

const CountryPage: React.FC<CountryPageProps> = ({ country }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore {country}</h1>
      <div className={styles.grid}>
        <Box country={country} name="Restaurant" />
        <Box country={country} name="Museum" />
        <Box country={country} name="Cafe" />
        <Box country={country} name="Park" />
      </div>
    </div>
  );
};

export default CountryPage;
