"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '../../../../components/Box/Box';
import styles from './Favorites.module.css';

const Favorites = () => {
  const router = useRouter();
  const [country, setCountry] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<{ country: string, city?: string, name: string }[]>([]);

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    const countrySegment = pathSegments[1];
    const citySegment = pathSegments[3]; // Assuming the city is always at the 4th segment

    setCountry(countrySegment);
    setCity(citySegment);

    const favoritesData = JSON.parse(localStorage.getItem('favorites') || '{}');
    const favoritesList = Object.keys(favoritesData).map(key => {
      const [favCountry, favCity, name] = key.split('-');
      return { country: favCountry, city: favCity, name };
    }).filter(item => {
      if (citySegment) {
        return item.country.toLowerCase() === countrySegment && item.city?.toLowerCase() === citySegment;
      }
      return item.country.toLowerCase() === countrySegment;
    });

    setFavorites(favoritesList);
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your Favorites in {city ? `${city.charAt(0).toUpperCase() + city.slice(1)}, ` : ''}{country.charAt(0).toUpperCase() + country.slice(1)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favorites.map((favorite, index) => (
          <Box key={index} country={favorite.country} name={favorite.name} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;