export type Weather = {
  description: string;
  icon: string;
  temp: number | null;
  wind: {
    speed: number | null;
    deg: number | null;
    gust: number | null;
  };
};

export type LocationContextType = {
  locationName: string;
  weatherInfo: Weather | null;
  updateLocation: (locationName: string, weatherInfo: Weather) => void;
};
