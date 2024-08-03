// src/app/[country]/[city]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import styles from './City.module.css';
import Box from '../../../components/Box/Box';
import countriesConfig from '../../../../config/countriesConfig';
import { Key, useEffect, useState } from 'react';

const Gothenburg = () => {
  const countryName = 'Sweden';
  useParams();
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
      <h1 className={styles.title}>
        Welcome to {countryConfig.cities[1]}!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countryConfig.places.map((place: string, index: Key | null | undefined) => (
            <Box key={index} country={countryConfig.cities[1]} name={place} />
          ))}
        </div>
    </div>
  );
};

export default Gothenburg;
