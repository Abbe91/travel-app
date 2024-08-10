"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./RestaurantSweden.module.css"; // Assuming you have a CSS module for styles

const RestaurantSweden = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        } else {
          console.error("Stored favorites is not an array");
        }
      } catch (error) {
        console.error("Error parsing stored favorites", error);
      }
    }
  }, []);

  const toggleFavorite = (restaurant: string) => {
    let updatedFavorites;
    if (favorites.includes(restaurant)) {
      updatedFavorites = favorites.filter(fav => fav !== restaurant);
    } else {
      updatedFavorites = [...favorites, restaurant];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (restaurant: string) => favorites.includes(restaurant);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Restaurants in Gothenburg</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg">Discover the best dining experiences in the city.</p>
          <Link href="/sweden/cities/gothenburg/restaurant/favorite">
            <p className="text-teal-300 underline">Go to Favorites</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Restaurant 1 */}
          <div className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition">
            <h2 className="text-2xl font-semibold">Heaven 23</h2>
            <p className="mt-2">Stunning views and the famous King Size Shrimp Sandwich.</p>
            <button
              className={styles.favoriteButton}
              onClick={() => toggleFavorite("Heaven 23")}
            >
              {isFavorite("Heaven 23") ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          {/* Restaurant 2 */}
          <div className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition">
            <h2 className="text-2xl font-semibold">Thörnströms Kök</h2>
            <p className="mt-2">Michelin-starred modern Swedish cuisine.</p>
            <button
              className={styles.favoriteButton}
              onClick={() => toggleFavorite("Thörnströms Kök")}
            >
              {isFavorite("Thörnströms Kök") ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          {/* Restaurant 3 */}
          <div className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition">
            <h2 className="text-2xl font-semibold">Sjömagasinet</h2>
            <p className="mt-2">A waterfront restaurant specializing in seafood dishes.</p>
            <button
              className={styles.favoriteButton}
              onClick={() => toggleFavorite("Sjömagasinet")}
            >
              {isFavorite("Sjömagasinet") ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          {/* Restaurant 4 */}
          <div className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition">
            <h2 className="text-2xl font-semibold">Koka</h2>
            <p className="mt-2">Innovative Nordic cuisine with seasonal ingredients.</p>
            <button
              className={styles.favoriteButton}
              onClick={() => toggleFavorite("Koka")}
            >
              {isFavorite("Koka") ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          {/* Add more restaurants as needed */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSweden;