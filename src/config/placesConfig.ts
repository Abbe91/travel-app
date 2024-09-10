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
        { name: "Restaurant", image: "/images/places/restaurant.jpg" },
        { name: "Museum", image: "/images/places/museum.jpg" },
        { name: "Cafe", image: "/images/places/cafe.jpg" },
        { name: "Park", image: "/images/places/park.jpg" }
      ]
    },
    {
      name: "Norway",
      places: [
        { name: "Restaurant", image: "/images/places/restaurant.jpg" },
        { name: "Museum", image: "/images/places/museum.jpg" },
        { name: "Cafe", image: "/images/places/cafe.jpg" },
        { name: "Park", image: "/images/places/park.jpg" }
      ]
    }
  ];
  
  export default placesConfig;