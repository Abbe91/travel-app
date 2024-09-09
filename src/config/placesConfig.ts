interface Place {
    name: string;
    image: string;
  }
  
  interface CountryPlacesConfig {
    name: string;
    places: Place[];
  }
  
  const placesConfig: CountryPlacesConfig[] = [
    {
      name: "Sweden",
      places: [
        { name: "Restaurant", image: "/images/stockholm.jpg" },
        { name: "Museum", image: "/images/gothenburg.webp" },
        { name: "Cafe", image: "/images/malmo.jpg" },
        { name: "Park", image: "/images/stockholm.jpg" }
      ]
    },
    {
      name: "Norway",
      places: [
        { name: "Restaurant", image: "/images/stockholm.jpg" },
        { name: "Museum", image: "/images/gothenburg.webp" },
        { name: "Cafe", image: "/images/malmo.jpg" },
        { name: "Park", image: "/images/stockholm.jpg" }
      ]
    }
  ];
  
  export default placesConfig;