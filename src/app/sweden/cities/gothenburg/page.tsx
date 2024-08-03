// src/app/[country]/[city]/page.tsx
"use client";

import { useParams } from 'next/navigation';
import styles from './City.module.css';

const CityPage = () => {
  const { country, city } = useParams();
  // check why the country it is undefined.
  console.log("why country not appear",country)
  
  // Handle undefined parameters
  const displayCountry = country ? country.charAt(0).toUpperCase() + country.slice(1) : 'Country';
  const displayCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'City';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to {displayCity}, {displayCountry}!
      </h1>
    </div>
  );
};

export default CityPage;
