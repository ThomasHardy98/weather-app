import axios from "axios";
import currentTime from "~/helpers/timezone-conversion";

export const GetLocation = async (locationInput: string) => {
  let locationRes;
  try {
    locationRes = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=1&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
  } catch (error) {
    throw error;
  }

  if (locationRes) {
    const location = {
      name: locationRes.data[0].name,
      lon: locationRes.data[0].lon,
      lat: locationRes.data[0].lat,
    };

    let weatherRes;

    try {
      weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          location.lat
        }&lon=${location.lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
    } catch (error) {
      throw error;
    }

    if (weatherRes) {
      const localTime = currentTime(
        weatherRes.data.dt,
        weatherRes.data.timezone
      );

      const weatherInfo = {
        description: weatherRes.data.weather[0].description,
        icon: weatherRes.data.weather[0].icon,
        temp: weatherRes.data.main.temp,
        wind: {
          speed: weatherRes.data.wind.speed,
          deg: weatherRes.data.wind.deg,
          gust: weatherRes.data.wind.gust,
        },
        localTime,
        rain: weatherRes.data?.rain,
        snow: weatherRes.data?.snow,
      };

      const locationData = {
        location,
        weatherInfo,
      };

      return locationData;
    }
  }
};

export const GetCurrentLocation = async (lat: string, lon: string) => {
  let locationRes;
  try {
    locationRes = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
  } catch (error) {
    throw error;
  }

  if (locationRes) {
    const location = {
      name: locationRes.data[0].name,
      lon: locationRes.data[0].lon,
      lat: locationRes.data[0].lat,
    };

    let weatherRes;

    try {
      weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          location.lat
        }&lon=${location.lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
    } catch (error) {
      throw error;
    }

    if (weatherRes) {
      const localTime = currentTime(
        weatherRes.data.dt,
        weatherRes.data.timezone
      );

      const weatherInfo = {
        description: weatherRes.data.weather[0].description,
        icon: weatherRes.data.weather[0].icon,
        temp: weatherRes.data.main.temp,
        wind: {
          speed: weatherRes.data.wind.speed,
          deg: weatherRes.data.wind.deg,
          gust: weatherRes.data.wind.gust,
        },
        localTime,
        rain: weatherRes.data?.rain,
        snow: weatherRes.data?.snow,
      };

      const locationData = {
        location,
        weatherInfo,
      };

      return locationData;
    }
  }
};
