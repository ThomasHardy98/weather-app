// Defining weather type that will contain all API response information from weather
export type Weather =
  | {
      description: string;
      icon: string;
      temp: number;
      tempMax: number;
      tempMin: number;
      feelsLike: number;
      humidity: number;
      wind: {
        speed: number;
      };
      localTime: string;
      rain?: string | undefined;
      snow?: string | undefined;
    }
  | undefined;

// Defining location type that will contain all API response information from geolocation
export type Location =
  | {
      name: string;
      lat: string;
      lon: string;
    }
  | undefined;

// Defining location context type that will contain all context variables and functions
export type LocationContextType = {
  location: Location;
  weatherInfo: Weather;
  isLoading: boolean;
  error: boolean;
  updateLocationData: (
    lat: string,
    lon: string,
    current: boolean,
    location: string
  ) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: boolean) => void;
};
