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

export type Location = {
  name: string;
  lat: string;
  lon: string;
};

export type LocationContextType = {
  location: Location;
  weatherInfo: Weather;
  updateLocation: (location: Location) => void;
  updateWeatherInfo: (weatherInfo: Weather) => void;
};
