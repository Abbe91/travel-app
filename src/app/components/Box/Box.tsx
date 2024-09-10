import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className={`mb-4 ${styles.boxContainer}`}>
      <div className={`grid grid-cols-1 ${styles.gridContainer}`}>
        {place && (
          <div className={`bg-slate-700 hover:bg-slate-600 text-white p-5 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 ${styles.placeContainer}`}>
            <Image src={place.image} alt={place.name} width={400} height={250} className={`w-full h-40 object-cover rounded-xl mb-4 ${styles.placeImage}`} />
            <h2 className={`text-xl font-semibold text-center ${styles.placeName}`}>{place.name}</h2>
            <Link href={url}>
              <p className={`text-white-300 hover:text-blue-200 text-base underline text-center mt-3 transition-colors duration-200 ${styles.exploreLink}`}>Explore {place.name}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;