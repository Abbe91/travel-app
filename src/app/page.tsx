"use client";

import { SetStateAction, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import ThreeBoxesSection from '../app/components/threeBoxesHome/page';


const europeanCountries = [
  "Sweden", "Norway", "Denmark", "Finland", "Iceland",
  "Germany", "France", "Italy", "Spain", "Portugal",
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("Sweden");
  const router = useRouter();

  const handleCountryChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedCountry(e.target.value);
  };

  const handleButtonClick = () => {
    router.push(`/${selectedCountry.toLowerCase()}`);
  };
  const countryInfo = {
    attractions: [
      { name: "Attraction 1", description: "Description of the first attraction in {selectedCountry}." },
      { name: "Attraction 2", description: "Description of the second attraction in {selectedCountry}." },
      { name: "Attraction 3", description: "Description of the third attraction in {selectedCountry}." }
    ]
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b ">
      <Head>
        <title className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b text-white'>Explore Europe</title>
        <meta name="description" content="Discover the best places to visit in Europe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/hero-s.jpg"
          alt="Beautiful European landscape"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center text-white">
            Welcome to Explore Europe!
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-center max-w-2xl text-white">
            Discover the best places to visit, eat, and explore in various European countries.
          </p>
          <div className="mt-4 text-center">
            <label htmlFor="hero-country-select" className="block text-lg font-medium mb-2 text-white">
              Select a country:
            </label>
            <div className="relative inline-block">
              <select
                id="hero-country-select"
                className="appearance-none bg-white text-teal-900 border border-teal-700 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {europeanCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-4 w-4 text-teal-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button
              className="mt-6 px-5 py-2 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
              onClick={handleButtonClick}
            >
              Go to {selectedCountry}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-8 lg:px-16 mt-12">
        <div className="mt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            {selectedCountry}
          </h2>
          <p className="mt-4 max-w-md text-base sm:text-lg">
            Explore the best restaurants and museums in {selectedCountry}. Discover hidden gems and must-see attractions.
          </p>
          <p className="mt-4 max-w-md text-base sm:text-lg">
            {selectedCountry}
          </p>
        </div>

        {/* New Section with Three Boxes */}
        <ThreeBoxesSection selectedCountry={selectedCountry} />
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl">
          <a href="/about" className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">About Me &rarr;</h3>
            <p className="text-base">Learn more about who I am and what I do.</p>
          </a>

          <a href="/projects" className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">Projects &rarr;</h3>
            <p className="text-base">Check out some of my recent work and projects.</p>
          </a>

          <a href="/blog" className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">Blog &rarr;</h3>
            <p className="text-base">Read my latest articles and blog posts.</p>
          </a>

          <a href="/contact" className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">Contact &rarr;</h3>
            <p className="text-base">Get in touch with me for collaborations or inquiries.</p>
          </a>
        </div>
      </main>
    </div>
  );
}