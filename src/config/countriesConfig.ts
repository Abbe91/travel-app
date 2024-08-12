interface City {
  name: string;
  image: string;
}

interface CountryConfig {
  name: string;
  country: string;
  stads: City[];
  places: string[];
}

const countriesConfig: CountryConfig[] = [
  {
    name: "Sweden",
    country: "test1",
    stads: [
      { name: "Stockholm", image: "/images/stockholm.jpg" },
      { name: "Gothenburg", image: "/images/gothenburg.webp" },
      { name: "Malmo", image: "/images/malmo.jpg" }
    ],
    places: ["restaurant", "museum", "cafe", "park"]
  },
  {
    name: "Norway",
    country: "test2",
    stads: [
      { name: "Oslo", image: "/images/oslo.jpg" },
      { name: "Bergen", image: "/images/bergen.jpg" },
      { name: "Stavanger", image: "/images/stavanger.jpg" }
    ],
    places: ["Restaurant", "Museum", "Cafe", "Park"]
  },
];

export default countriesConfig;