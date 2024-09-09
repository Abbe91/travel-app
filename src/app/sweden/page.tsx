"use client";

import { Key, useEffect, useState } from 'react';
import Box from '../components/Box/Box';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import hero from '../../../public/images/gothenburg.webp';
import kok from '../../../public/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg';
import countriesConfig from '../../config/countriesConfig';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';

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
    return <div className="min-h-screen flex items-center justify-center text-gray-900">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b text-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-gray-800">
        <Image 
          src={hero} // Replace with your image path
          alt="Sweden"
          objectFit="cover"
          className="opacity-70"
          layout="fill"
        />
        <div className="absolute h-screen inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to {countryConfig.name}</h1>
          <p className="text-lg text-gray-200 mb-6 text-center">Discover the beauty and charm of Sweden, from its vibrant cities to its stunning landscapes.</p>
          <Link href={`/${country}/favorites`}>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Explore Favorites
            </button>
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-6">
        {/* Favorites Section 
        <div className="text-center mb-12">
          <Link href={`/${country}/favorites`}>
            <p className="text-blue-300 hover:text-blue-200 text-lg underline transition-colors duration-200">View Your Favorites</p>
          </Link>
        </div>
        */}

        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center text-black">Explore Cities in {countryConfig.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {countryConfig.stads.map((stad: { name: string, image: string }, index: number) => (
              <div key={index} className="bg-slate-700 hover:bg-slate-600 text-white p-5 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
                <Image src={stad.image} alt={stad.name} width={400} height={250} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h2 className="text-xl font-semibold text-center">{stad.name}</h2>
                <Link href={`/sweden/cities/${stad.name.toLowerCase()}`}>
                  <p className="text-white-300 hover:text-blue-200 text-base underline text-center mt-3 transition-colors duration-200">Explore {stad.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* New Section 1: Country Overview */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center text-black">About {countryConfig.name}</h2>
          <p className="text-lg text-center text-gray-700 mb-8">
            {countryConfig.name} is known for its beautiful landscapes, rich history, and vibrant culture. Explore the various attractions and experiences that this country has to offer.
          </p>
          <div className="flex justify-center">
            <Image src={hero} alt="Sweden Overview" width={800} height={400} className="rounded-xl shadow-lg" />
          </div>
        </div>

        {/* New Section 2: Cultural Highlights */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center text-black">Cultural Highlights of {countryConfig.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white text-black p-5 rounded-xl shadow-lg">
              <Image src={kok} alt="Cuisine" width={300} height={200} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Cuisine</h3>
              <p className="text-lg">Experience the unique flavors of {countryConfig.name}&#39;s cuisine, from traditional dishes to modern culinary delights.</p>
              </div>
              <div className="bg-white text-black p-5 rounded-xl shadow-lg">
                <Image src={kok} alt="Festivals" width={300} height={200} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Festivals</h3>
                <p className="text-lg">Join in the celebrations of various festivals that showcase the rich cultural heritage of {countryConfig.name}.</p>
              </div>
              <div className="bg-white text-black p-5 rounded-xl shadow-lg">
                <Image src={kok} alt="Art and Music" width={300} height={200} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Art and Music</h3>
                <p className="text-lg">Discover the vibrant art and music scene in {countryConfig.name}, featuring local and international talents.</p>
              </div>
              <div className="bg-white text-black p-5 rounded-xl shadow-lg">
                <Image src={kok} alt="Historical Sites" width={300} height={200} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Historical Sites</h3>
                <p className="text-lg">Explore the historical sites and landmarks that tell the story of {countryConfig.name}&#39;s rich past.</p>
              </div>
              </div>
              </div>
              <h2 className="text-4xl font-semibold mb-8 text-center text-black">Famous Places in {countryConfig.name}:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {countryConfig.places.map((place: string, index: Key | null | undefined) => (
                  <Box 
                    key={index} 
                    country={countryConfig.name} 
                    name={place} 
                  />
                ))}
              </div>
            </div>
          </div>
);
};

export default Sweden;
