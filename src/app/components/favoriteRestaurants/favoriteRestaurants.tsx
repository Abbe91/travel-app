"use client";
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { restaurants } from "../../../config/restaurantsConfig";

interface Restaurant {
  name: string;
  englishName: string;
  photo: string;
  rating: number;
  price: string;
  description: string;
}

const FavoriteRestaurants = () => {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          const favoriteRestaurants = restaurants.filter(restaurant =>
            parsedFavorites.includes(restaurant.name)
          );
          setFavorites(favoriteRestaurants);
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
            <Link 
              key={index} 
              href={`/sweden/cities/gothenburg/restaurant/${restaurant.englishName}`}
              passHref
            >
              <div className="bg-teal-700 hover:bg-teal-600 text-white p-6 rounded-lg shadow-md transition cursor-pointer">
              <Image src={restaurant.photo} alt={restaurant.name} width={400} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
                  <p className="mt-2">Rating: {restaurant.rating}</p>
                  <p className="mt-2">Price: {restaurant.price}</p>
                  <p className="mt-2">description: {restaurant.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteRestaurants;