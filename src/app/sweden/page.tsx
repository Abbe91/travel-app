"use client";

import { Key, useEffect, useState } from 'react';
import Box from '../components/Box/Box';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import countriesConfig from '../../config/countriesConfig';
import styles from './Sweden.module.css';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const Sweden = () => {
  const params = useParams() as Params;
  const [countryConfig, setCountryConfig] = useState<any | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    console.log("Params:", params); // Log params to debug

    const config = countriesConfig.find(c => c.name.toLowerCase() === 'sweden');
    setCountryConfig(config);
    const path = window.location.pathname.split('/')[1];
    setCountry(path);
    console.log("CountryPage countryName:", 'Sweden');
    console.log("Path:", path);
    console.log("CountryConfig:", config);
  }, []);

  if (!countryConfig) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Explore {countryConfig.name}</h1>
        <Link href={`/${country}/favorites`}>
          <p className={styles.favoritesLink}>View Your Favorites</p>
        </Link>
        <h2 className={styles.title}>
          Welcome to {countryConfig.name}!
        </h2>
        <h3 className={styles.heading}>Cities in {countryConfig.name}:</h3>
        <ul className={styles.citylist}>
          {countryConfig.stads.map((stad: string, index: number) => (
            <li key={index} className={styles.cityitem}>
              <Link href={`/sweden/cities/${stad.toLowerCase()}`}>
                {stad}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl mb-4">Places in {countryConfig.name}:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countryConfig.places.map((place: string, index: Key | null | undefined) => (
            <Box 
              key={index} 
              country={countryConfig.name} 
              stad={params.city} 
              name={place} 
              place={place} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sweden;
