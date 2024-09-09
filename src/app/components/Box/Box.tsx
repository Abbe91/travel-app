import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Box.module.css';
import placesConfig from '../../../config/placesConfig'; 

interface BoxProps {
  country: string;
  stad?: string;
  name: string;
};

const Box = ({ country, stad = '', name }: BoxProps) => {
  const [place, setPlace] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    const countryConfig = placesConfig.find(c => c.name.toLowerCase() === country.toLowerCase());
    if (countryConfig) {
      const foundPlace = countryConfig.places.find(p => p.name.toLowerCase() === name.toLowerCase());
      setPlace(foundPlace || null);
    }
  }, [country, name]);

  const url = `/${country.toLowerCase()}/cities/${stad.toLowerCase()}/${name.toLowerCase()}`;

  return (
    <div className={styles.box}>
      <Link href={url}>
        <p className={styles.link}>
          <h3>{name} in {stad ? `${stad}, ` : ''}{country} &rarr;</h3>
        </p>
      </Link>
      {place && (
        <div className={styles.place}>
          <img src={place.image} alt={place.name} className={styles.placeImage} />
          <p>{place.name}</p>
        </div>
      )}
    </div>
  );
};

export default Box;