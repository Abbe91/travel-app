"use client";

import { useState, useEffect } from "react";

const FavoriteRestaurants = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Your Favorite Restaurants</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((restaurant, index) => (
            <div key={index} className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition">
              <h2 className="text-2xl font-semibold">{restaurant}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteRestaurants;