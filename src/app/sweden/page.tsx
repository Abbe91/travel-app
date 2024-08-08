"use client";

import { Key, useEffect, useState } from 'react';
import Box from '../components/Box/Box';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import countriesConfig from '../../config/countriesConfig';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const Sweden = () => {
  const params = useParams() as Params;
  const [countryConfig, setCountryConfig] = useState<any | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const config = countriesConfig.find(c => c.name.toLowerCase() === 'sweden');
    setCountryConfig(config);
    const path = window.location.pathname.split('/')[1];
    setCountry(path);
  }, []);

  if (!countryConfig) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Explore {countryConfig.name}</h1>

        <div className="text-center mb-8">
          <Link href={`/${country}/favorites`}>
            <p className="text-teal-300 hover:text-teal-200 text-lg underline">View Your Favorites</p>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to {countryConfig.name}!</h2>
          <h3 className="text-2xl font-medium mb-4">Cities in {countryConfig.name}:</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {countryConfig.stads.map((stad: string, index: number) => (
              <li key={index} className="bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md transition">
                <Link href={`/sweden/cities/${stad.toLowerCase()}`}>
                  {stad}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Places in {countryConfig.name}:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countryConfig.places.map((place: string, index: Key | null | undefined) => (
            <Box 
              key={index} 
              country={countryConfig.name} 
              name={place} 
              place={place} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sweden;
