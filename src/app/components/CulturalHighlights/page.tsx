// components/CulturalHighlights/page.tsx

import Image from "next/image";

interface CulturalHighlight {
  title: string;
  description: string;
  image: string;
}

interface CountryPageProps {
  country: string;
  culturalHighlights: CulturalHighlight[];
}

const CulturalHighlights = ({
  country,
  culturalHighlights,
}: CountryPageProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-semibold mb-6 text-center text-black">
        Cultural Highlights of {country}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {culturalHighlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white text-black p-5 rounded-xl shadow-lg"
          >
            <Image
              src={highlight.image}
              alt={highlight.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">{highlight.title}</h3>
            <p className="text-lg">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalHighlights;
