"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '../components/Box/Box';
import Link from 'next/link';
import countriesConfig from '../../config/countriesConfig';
import styles from './Norway.module.css';

const Norway = () => {
  const router = useRouter();
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    setCountry(path);
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  const countryConfig = countriesConfig.find(c => c.name.toLowerCase() === country);

  if (!countryConfig) {
    return <div>Country not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Explore {countryConfig.name}</h1>
        <Link href={`/${country}/favorites`}>
          <p className={styles.favoritesLink}>View Your Favorites</p>
        </Link>
        <h3 className={styles.heading}>Cities in {countryConfig.name}:</h3>
        <ul className={styles.citylist}>
          {countryConfig.stads.map((stad: string, index: number) => (
            <li key={index} className={styles.cityitem}>
              <Link href={`/norway/cities/${stad.toLowerCase()}`}>
                {stad}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countryConfig.places.map((place, index) => (
            <Box key={index} country={countryConfig.name} name={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Norway;
