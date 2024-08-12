"use client";

import { Key, useEffect, useState } from 'react';
import Box from '../../../components/Box/Box';
import Link from 'next/link';
import countriesConfig from '../../../../config/countriesConfig';

const Gothenburg = () => {
  const countryName = 'sweden';
  const stad = "gothenburg";
  const [countryConfig, setCountryConfig] = useState<any | null>(null);

  useEffect(() => {
    const config = countriesConfig.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    setCountryConfig(config);
  }, []);

  if (!countryConfig) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-900 text-white">
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <Link href={`/${countryName}/cities/${stad}/favorites`}>
          <p className="text-teal-300 hover:text-teal-200 text-lg underline">View Your Favorites</p>
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">Welcome to {countryConfig.stads.find((city: { name: string; }) => city.name.toLowerCase() === stad.toLowerCase())?.name}!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countryConfig.places.map((place: string, index: Key | null | undefined) => (
          <Box 
            key={index}
            country={countryName}
            stad={stad}
            name={place} 
            place={place.toLowerCase().replace(/\s+/g, '-')} 
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Gothenburg;
