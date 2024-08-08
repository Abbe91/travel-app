"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import styles from './Favorites.module.css';

const Favorites = () => {
  const router = useRouter();
  const [country, setCountry] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<{ country: string, name: string }[]>([]);

  useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    setCountry(path);

    const favoritesData = JSON.parse(localStorage.getItem('favorites') || '{}');
    const favoritesList = Object.keys(favoritesData).map(key => {
      const [favCountry, name] = key.split('-');
      return { country: favCountry, name };
    }).filter(item => item.country.toLowerCase() === path);
    setFavorites(favoritesList);
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Favorites in {country.charAt(0).toUpperCase() + country.slice(1)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favorites.map((favorite, index) => (
          <Box key={index} country={favorite.country} name={favorite.name} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
