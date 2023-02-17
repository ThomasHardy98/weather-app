import { useState, useEffect } from "react";

import { LocationContext } from "~/context/location-context";
import { Location, Weather } from "~/@types/location";
import { GetLocation } from "~/api/weather";

interface LocationContextProps {
  children: React.ReactNode;
}

// Creating location provider and defining values for context
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
    // If using geolocation
    if (current) {
      try {
        setLoading(true);
        // Get location using geolocation
        response = await GetLocation(true, "", lat, lon);
        // Once response has finished, set loading to false
        setLoading(false);
      } catch (error) {
        // If the response returns an error, turn off loading and set error
        setLoading(false);
        setError(true);
      }
    } else {
      // Use user input
      try {
        setLoading(true);
        // Get location using user input
        response = await GetLocation(false, location);
        // Once response has finished, set loading to false
        setLoading(false);
      } catch (error) {
        // If the response returns an error, turn off loading and set error
        setLoading(false);
        setError(true);
      }
    }

    // If response has been received, set the context values and store in local storage
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

  // Manages error state for error display
  const setError = (error: boolean) => {
    setIsError(error);
  };

  // Check for local storage on page load or refresh
  useEffect(() => {
    const storedLocationName = localStorage.getItem("storedLocationName");

    // If there is a locally stored name, use it to get the new weather for that location
    if (storedLocationName) {
      updateLocationData("", "", false, storedLocationName);
    }
  }, []);

  // Values to provide to the provider
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
