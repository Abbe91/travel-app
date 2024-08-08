"use client";
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Box.module.css';

type BoxProps = {
  country: string;
  stad?: string; // Make stad optional
  name: string;
  place: string;
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

  return (
    <div className={styles.box}>
      <Link href={`/${country.toLowerCase()}/cities/${stad.toLowerCase()}/${place.toLowerCase()}`}>
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
