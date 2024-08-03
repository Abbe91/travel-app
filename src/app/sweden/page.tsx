"use client";

import { useEffect, useState } from 'react';
import Box from '../components/Box/Box';
import Link from 'next/link';
import countriesConfig from '../../config/countriesConfig';
import styles from './Sweden.module.css';

const Sweden = () => {
  const countryName = 'Sweden';
  const [countryConfig, setCountryConfig] = useState<any | null>(null);

  useEffect(() => {
    const config = countriesConfig.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    setCountryConfig(config);
  }, []);

  if (!countryConfig) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Explore {countryConfig.name}</h1>
        <h2 className="text-2xl mb-4">Cities in {countryConfig.name}:</h2>
        <ul className="list-disc pl-5 mb-8">
          {countryConfig.cities.map((city, index) => (
            <li key={index}>
              <Link href={`/sweden/cities/${city.toLowerCase()}`}>
                {city}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl mb-4">Places in {countryConfig.name}:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countryConfig.places.map((place, index) => (
            <Box key={index} country={countryConfig.name} name={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sweden;
