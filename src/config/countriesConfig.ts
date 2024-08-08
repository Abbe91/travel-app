interface CountryConfig {
  name: string;
  country: string;
  stads: string[];
  places: string[];
}

const countriesConfig: CountryConfig[] = [
  {
    name: "Sweden",
    country: "test1",
    stads: ["stockholm", "gothenburg", "malmo"],
    places: ["restaurant", "museum", "cafe", "park"]
  },
  {
    name: "Norway",
    country: "test2",
    stads: ["Oslo", "Bergen", "Stavanger"],
    places: ["Restaurant", "Museum", "Cafe", "Park"]
  },
];

export default countriesConfig;
