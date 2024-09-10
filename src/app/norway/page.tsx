"use client";

import { Key, useEffect, useState } from "react";
import Box from "../components/Box/Box";
import { useParams } from "next/navigation";
import Link from "next/link";
import hero from "../../../public/images/gothenburg.webp";
import kok from "../../../public/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg";
import countriesConfig from "../../config/countriesConfig";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import CulturalHighlights from "../components/CulturalHighlights/page";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Image from "next/image";

const Norway = () => {
  const params = useParams() as Params;
  const [countryConfig, setCountryConfig] = useState<any | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  // Meta information
  const metaTitle = "Explore Norway";
  const metaContent =
    "Discover the beauty and charm of Norway, from its vibrant cities to its stunning landscapes.";

  // Query parameters
  const countryName = "Norway";
  const countryDescription =
    "Norway is known for its beautiful landscapes, rich history, and vibrant culture. Explore the various attractions and experiences that this country has to offer.";
  const query = "This is a query parameter";

  // Form and subtitles
  const formTitle = "Discover Norway";
  const subtitle1 = "Vibrant Cities";
  const subtitle2 = "Stunning Landscapes";
  interface CulturalHighlight {
    title: string;
    description: string;
    image: string;
  }
  const culturalHighlights: CulturalHighlight[] = [
    {
      title: "Cuisine",
      description:
        "Experience the unique flavors of Norway's cuisine, from traditional dishes to modern culinary delights.",
      image: kok.src,
    },
    {
      title: "Festivals",
      description:
        "Join in the celebrations of various festivals that showcase the rich cultural heritage of Sweden.",
      image: kok.src,
    },
    {
      title: "Art and Music",
      description:
        "Discover the vibrant art and music scene in Norway, featuring local and international talents.",
      image: kok.src,
    },
    {
      title: "Historical Sites",
      description:
        "Explore the historical sites of Norway, each with its own unique story and significance.",
      image: kok.src,
    },
  ];
  useEffect(() => {
    const config = countriesConfig.find(
      (c) => c.name.toLowerCase() === "norway"
    );
    setCountryConfig(config);
    const path = window.location.pathname.split("/")[1];
    setCountry(path);
  }, []);

  if (!countryConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-900">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b text-gray-50">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaContent} />
      </Head>
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-gray-800">
        <Image
          src={hero}
          alt="Norway"
          objectFit="cover"
          className="opacity-70"
          layout="fill"
        />
        <div className="absolute h-screen inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Welcome to {countryConfig.name}
          </h1>
          <p className="text-lg text-gray-200 mb-6 text-center">
            {metaContent}
          </p>
          <Link href={`/${country}/favorites`}>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Explore Favorites
            </button>
          </Link>
        </div>
      </section>
      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center text-black">
            Explore Cities in {countryConfig.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {countryConfig.stads.map(
              (stad: { name: string; image: string }, index: number) => (
                <div
                  key={index}
                  className="bg-slate-700 hover:bg-slate-600 text-white p-5 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <Image
                    src={stad.image}
                    alt={stad.name}
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-xl font-semibold text-center">
                    {stad.name}
                  </h2>
                  <Link href={`/Norway/cities/${stad.name.toLowerCase()}`}>
                    <p className="text-white-300 hover:text-blue-200 text-base underline text-center mt-3 transition-colors duration-200">
                      Explore {stad.name}
                    </p>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
        {/* New Section 1: Country Overview */}
        <div className="mb-16">
          <CountryInfo country={countryName} description={countryDescription} />
          <div className="flex justify-center">
            <Image
              src={hero}
              alt="Norway Overview"
              width={800}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* New Section 2: Cultural Highlights */}
        <div className="text-black">
          <CulturalHighlights
            country={countryName}
            culturalHighlights={culturalHighlights}
          />
        </div>

        {/* New Section 3: Places */}
        <h2 className="text-4xl font-semibold mb-8 text-center text-black">
          Famous Places in {countryConfig.name}:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countryConfig.places.map(
            (place: string, index: Key | null | undefined) => (
              <Box key={index} country={countryConfig.name} name={place} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Norway;
