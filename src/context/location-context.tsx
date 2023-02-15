import { createContext } from "react";

import { LocationContextType } from "~/@types/location";

export const LocationContext = createContext<LocationContextType>({
  location: undefined,
  weatherInfo: undefined,
  isLoading: false,
  updateLocationData: () => {},
  setLoading: () => {},
});
