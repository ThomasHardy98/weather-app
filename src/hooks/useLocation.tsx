import { useState, useEffect } from "react";

import { LocationContext } from "~/context/location-context";
import { Location, Weather } from "~/@types/location";
import { GetCurrentLocation, GetLocation } from "~/api/weather";

interface LocationContextProps {
  children: React.ReactNode;
}

const LocationProvider = ({ children }: LocationContextProps) => {
  const [location, setLocation] = useState<Location>(undefined);
  const [weatherInfo, setWeatherInfo] = useState<Weather>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateLocationData = async (
    lat: string,
    lon: string,
    current: boolean,
    location: string
  ) => {
    let response;
    if (current) {
      try {
        setLoading(true);
        response = await GetCurrentLocation(lat, lon);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    } else {
      try {
        setLoading(true);
        response = await GetLocation(location);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    }

    setLocation(response?.location);
    setWeatherInfo(response?.weatherInfo);

    const storedLocationName = response?.location.name;

    // Set local storage
    localStorage.setItem("storedLocationName", storedLocationName);
  };

  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  // If local storage available, load that
  useEffect(() => {
    const storedLocationName = localStorage.getItem("storedLocationName");

    const fetchLocation = async (location: string) => {
      try {
        await updateLocationData("", "", false, location);
      } catch (error) {
        throw error;
      }
    };

    if (storedLocationName) {
      fetchLocation(storedLocationName);
    }
  }, []);

  const value = {
    location,
    weatherInfo,
    isLoading,
    updateLocationData,
    setLoading,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
