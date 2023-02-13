import axios from "axios";

export const GetLocation = async (locationInput: string) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=1&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    const location = {
      name: res.data[0].name,
      lon: res.data[0].lon,
      lat: res.data[0].lat,
    };

    return location;
  } catch (err) {
    throw err;
  }
};

export const GetWeatherInfo = async (lat: string, lon: string) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    const weatherInfo = {
      description: res.data.weather[0].description,
      icon: res.data.weather[0].icon,
      temp: res.data.main.temp,
      wind: {
        speed: res.data.wind.speed,
        deg: res.data.wind.deg,
        gust: res.data.wind.gust,
      },
    };

    return weatherInfo;
  } catch (err) {
    throw err;
  }
};
