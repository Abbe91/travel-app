"use client";

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import styles from '../styles/Home.module.css';

const europeanCountries = [
  "Sweden", "Norway", "Denmark", "Finland", "Iceland",
  "Germany", "France", "Italy", "Spain", "Portugal",
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("Sweden");
  const router = useRouter();

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleButtonClick = () => {
    router.push(`/${selectedCountry.toLowerCase()}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>My Custom Homepage</title>
        <meta name="description" content="Welcome to my custom homepage built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Website!</h1>
        <p className={styles.description}>
          This is a custom homepage built with Next.js.
        </p>

        <div className="mt-4 text-center">
          <label htmlFor="country-select" className="block text-lg font-medium">Select a country:</label>
          <select
            id="country-select"
            className={styles.dropdown}
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {europeanCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opastad-50"
            onClick={handleButtonClick}
          >
            Go to {selectedCountry}
          </button>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold">{selectedCountry}</h2>
          <p className="mt-4">Explore the best restaurants and museums in {selectedCountry}.</p>
        </div>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Learn more about who I am and what I do.</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Check out some of my recent work and projects.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Read my latest articles and blog posts.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Get in touch with me for collaborations or inquiries.</p>
          </a>
        </div>
      </main>

    </div>
  );
}
