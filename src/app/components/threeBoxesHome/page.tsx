// components/ThreeBoxesSection.tsx
import Image from 'next/image';

interface ThreeBoxesSectionProps {
  selectedCountry: string;
}

const ThreeBoxesSection: React.FC<ThreeBoxesSectionProps> = ({ selectedCountry }) => {
  return (
    <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
      <div className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
        <Image
          src="/images/hero-s.jpg"
          alt="Attraction 1"
          width={400}
          height={300}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Attraction 1</h3>
        <p className="text-base">Description of the first attraction in {selectedCountry}.</p>
      </div>

      <div className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
        <Image
          src="/images/hero-s.jpg"
          alt="Attraction 2"
          width={400}
          height={300}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Attraction 2</h3>
        <p className="text-base">Description of the second attraction in {selectedCountry}.</p>
      </div>

      <div className="p-6 bg-white text-teal-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
        <Image
          src="/images/hero-s.jpg"
          alt="Attraction 3"
          width={400}
          height={300}
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Attraction 3</h3>
        <p className="text-base">Description of the third attraction in {selectedCountry}.</p>
      </div>
    </div>
  );
};

export default ThreeBoxesSection;