import { createContext, useState } from "react";

import { LocationContextType, Weather, Location } from "~/@types/location";

export const LocationContext = createContext<LocationContextType | null>(null);

interface LocationContextProps {
  children: React.ReactNode;
}

const LocationProvider = ({ children }: LocationContextProps) => {
  const [location, setLocation] = useState<Location>({
    name: "",
    lon: "",
    lat: "",
  });
  const [weatherInfo, setWeatherInfo] = useState<Weather>({
    description: "",
    icon: "",
    temp: null,
    wind: {
      speed: null,
      deg: null,
      gust: null,
    },
  });

  const updateLocation = (location: Location) => {
    setLocation(location);
  };

  const updateWeatherInfo = (weatherInfo: Weather) => {
    setWeatherInfo(weatherInfo);
  };

  const value = {
    location,
    weatherInfo,
    updateLocation,
    updateWeatherInfo,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
