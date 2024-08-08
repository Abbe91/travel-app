// src/app/[country]/[stad]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import styles from './City.module.css';
import Box from '../../../components/Box/Box';
import countriesConfig from '../../../../config/countriesConfig';
import { Key, useEffect, useState } from 'react';

interface Params {
  stad: string | null;
}

const Gothenburg = () => {
  const params = useParams() as unknown as Params;
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
      <h1 className={styles.title}>
        Welcome to {countryConfig.stads[1]}!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {countryConfig.places.map((place: string, index: Key | null | undefined) => (
          <Box 
            key={index}
            country={countryName}
            stad={params?.stad || "gothenburg"}
            name={place} 
            place={place.toLowerCase().replace(/\s+/g, '-')} 
          />
        ))}
      </div>
    </div>
  );
};

export default Gothenburg;