import { createContext, useState } from "react";

import { LocationContextType, Weather } from "~/@types/location";

export const LocationContext = createContext<LocationContextType | null>(null);

interface LocationContextProps {
  children: React.ReactNode;
}

const LocationProvider = ({ children }: LocationContextProps) => {
  const [locationName, setLocationName] = useState("");
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

  const updateLocation = (locationName: string, weatherInfo: Weather) => {
    setLocationName(locationName);
    setWeatherInfo(weatherInfo);
  };

  const value = {
    locationName,
    weatherInfo,
    updateLocation,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
