import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '../Box/Box';
import Link from 'next/link';
import countriesConfig from '../../../config/countriesConfig';
import styles from './CountryPage.module.css';

interface Params {
  country: string;
}

const CountryPage = () => {
  const { country } = useParams() as unknown as Params;
  const [countryConfig, setCountryConfig] = useState<any | null>(null);

  useEffect(() => {
    if (country) {
      const config = countriesConfig.find(c => c.name.toLowerCase() === country.toLowerCase());
      setCountryConfig(config);
    }
  }, [country]);

  if (!countryConfig) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Explore {countryConfig.name}</h1>
        <Link href={`/${countryConfig.name.toLowerCase()}/favorites`}>
          <a className={styles.favoritesLink}>View Your Favorites</a>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countryConfig.stads.map((stad: string, index: number) => (
            <Box key={index} country={countryConfig.name} name={stad} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;