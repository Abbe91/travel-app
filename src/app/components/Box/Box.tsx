"use client";
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Box.module.css';

type BoxProps = {
  country: string;
  name: string;
};

const Box = ({ country, name }: BoxProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    setIsFavorite(favorites[`${country}-${name}`] || false);
  }, [country, name]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    if (favorites[`${country}-${name}`]) {
      delete favorites[`${country}-${name}`];
    } else {
      favorites[`${country}-${name}`] = true;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.box}>
      <Link href={`/${country.toLowerCase()}/${name.toLowerCase()}`}>
        <p className={styles.link}>
          <h3>{name} in {country} &rarr;</h3>
        </p>
      </Link>
      <button className={styles.favoriteButton} onClick={toggleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
      
    </div>
  );
};

export default Box;
