"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '../../../../components/Box/Box';

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
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Your Favorites in {city ? `${city.charAt(0).toUpperCase() + city.slice(1)}, ` : ''}{country.charAt(0).toUpperCase() + country.slice(1)}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((favorite, index) => (
            <Box 
              key={index} 
              country={favorite.country} 
              name={favorite.name} 
              stad={favorite.city || ''} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
