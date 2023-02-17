import { createContext } from "react";

import { LocationContextType } from "~/@types/location";

// Creating the location context
export const LocationContext = createContext<LocationContextType>({
  location: undefined,
  weatherInfo: undefined,
  isLoading: false,
  error: false,
  updateLocationData: () => {},
  setLoading: () => {},
  setError: () => {},
});
