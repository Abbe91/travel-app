"use client";

import { Key, useEffect, useState } from 'react';
import Box from '../../../components/Box/Box';
import Link from 'next/link';
import countriesConfig from '../../../../config/countriesConfig';
import exploreGbg from '../../../../../public/images/gothenburg.webp';
import Image from 'next/image';

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
  
  const myCity = countryConfig.stads.find((city: { name: string; }) => city.name.toLowerCase() === stad.toLowerCase())?.name!;
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative mb-16 h-screen w-full">
        <Image 
          src={exploreGbg} 
          alt="Sweden Hero" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full object-cover rounded-none shadow-lg opacity-70" 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-white mb-4">Welcome to  {myCity}</h1>
          <p className="text-lg text-center text-white">Discover the beauty and culture of {countryConfig.name}. Explore cities, famous places, and immerse yourself in the rich heritage of this amazing country.</p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <Link href={`/${countryName}/cities/${stad}/favorites`}>
            <p className="text-teal-500 hover:text-teal-400 text-lg underline">View Your Favorites</p>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Welcome to {myCity}!</h1>

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