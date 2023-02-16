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
  const [error, setIsError] = useState<boolean>(false);

  // Make an API call and then use the response to update the context
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
        setLoading(false);
        setError(true);
      }
    } else {
      try {
        setLoading(true);
        response = await GetLocation(location);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    if (response) {
      setLocation(response.location);
      setWeatherInfo(response.weatherInfo);
      const storedLocationName = response.location.name;
      localStorage.setItem("storedLocationName", storedLocationName);
    }
  };

  // Manages loading state for loading display
  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const setError = (error: boolean) => {
    setIsError(error);
  };

  // Check for local storage on page load or refresh
  useEffect(() => {
    const storedLocationName = localStorage.getItem("storedLocationName");

    if (storedLocationName) {
      updateLocationData("", "", false, storedLocationName);
    }
  }, []);

  const value = {
    location,
    weatherInfo,
    isLoading,
    error,
    updateLocationData,
    setLoading,
    setError,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
