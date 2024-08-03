"use client";
import { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import styles from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState<{ country: string, name: string }[]>([]);

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem('favorites') || '{}');
    const favoritesList = Object.keys(favoritesData).map(key => {
      const [country, name] = key.split('-');
      return { country, name };
    }).filter(item => item.country === 'Sweden');
    setFavorites(favoritesList);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Favorites in Sweden</h1>
      <div className={styles.grid}>
        {favorites.map((favorite, index) => (
          <Box key={index} country={favorite.country} name={favorite.name} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
