export type Weather =
  | {
      description: string;
      icon: string;
      temp: number;
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      localTime: string;
    }
  | undefined;

export type Location =
  | {
      name: string;
      lat: string;
      lon: string;
    }
  | undefined;

export type LocationContextType = {
  location: Location;
  weatherInfo: Weather;
  isLoading: boolean;
  updateLocationData: (
    lat: string,
    lon: string,
    current: boolean,
    location: string
  ) => void;
  setLoading: (isLoading: boolean) => void;
};
