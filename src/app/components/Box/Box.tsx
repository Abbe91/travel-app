import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './Box.module.css';

interface BoxProps {
  country: string;
  stad?: string;
  name: string;
  place?: string;
};

const Box = ({ country, stad = '', name, place }: BoxProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    setIsFavorite(favorites[`${country}-${stad ? `${stad}-` : ''}${name}`] || false);
  }, [country, stad, name]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const key = `${country}-${stad ? `${stad}-` : ''}${name}`;
    if (favorites[key]) {
      delete favorites[key];
    } else {
      favorites[key] = true;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  // Log the props to debug
  useEffect(() => {
    console.log("Box Component Props:", { country, stad, name, place });
  }, [country, stad, name, place]);

  const url = place 
    ? `/${country.toLowerCase()}/cities/${stad.toLowerCase()}/${place.toLowerCase()}`
    : `/${country.toLowerCase()}/cities/${stad.toLowerCase()}`;

  return (
    <div className={styles.box}>
      <Link href={url}>
        <p className={styles.link}>
          <h3>{name} in {stad ? `${stad}, ` : ''}{country} &rarr;</h3>
        </p>
      </Link>
      <button className={styles.favoriteButton} onClick={toggleFavorite}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Box;