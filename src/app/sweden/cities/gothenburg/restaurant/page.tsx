"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./RestaurantSweden.module.css";
import { restaurants } from "../../../../../config/restaurantsConfig";
import Image from "next/image";

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
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition">
              <Image src={restaurant.photo} alt={restaurant.name} width={400} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
              <p className="mt-2">{restaurant.description}</p>
              <p className="mt-2">{restaurant.category}</p>
              <p className="mt-2">Price: {restaurant.price}</p>
              <p className="mt-2">Rating: {restaurant.rating}</p>
              <button
                className={styles.favoriteButton}
                onClick={() => toggleFavorite(restaurant.englishName)}
              >
                {isFavorite(restaurant.name) ? <FaHeart /> : <FaRegHeart />}
                </button>
              <Link href={`/sweden/cities/gothenburg/restaurant/${encodeURIComponent(restaurant.englishName ?? "")}`}>
                <button className="mt-4 bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded block">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSweden;