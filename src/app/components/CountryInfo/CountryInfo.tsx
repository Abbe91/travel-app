// components/CountryInfo.js
import React from 'react';

const CountryInfo = ({ country, description }: { country: string, description: string }) => {
  return (
    <div>
      <h1 className='text-4xl font-semibold mb-6 text-center text-black'>Welcome to {country}!</h1>
      <p className='text-2xl font-semibold mb-6 text-center text-black'>{description}</p>
    </div>
  );
};

export default CountryInfo;
