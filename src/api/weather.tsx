import axios from "axios";

import currentTime from "~/helpers/timezone-conversion";

export const GetLocation = async (locationInput: string) => {
  try {
    // Get location based off user input
    const locationRes = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=1&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    const location = {
      name: locationRes.data[0].name,
      lon: locationRes.data[0].lon,
      lat: locationRes.data[0].lat,
    };

    // Set weather info for location
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        location.lat
      }&lon=${location.lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    );

    const localTime = currentTime(weatherRes.data.dt, weatherRes.data.timezone);

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
  } catch (err) {
    throw err;
  }
};

export const GetCurrentLocation = async (lat: string, lon: string) => {
  try {
    // Get location based off users location data
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    const location = {
      name: res.data[0].name,
      lon: res.data[0].lon,
      lat: res.data[0].lat,
    };

    // Set weather info for location
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        location.lat
      }&lon=${location.lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    );

    const localTime = currentTime(weatherRes.data.dt, weatherRes.data.timezone);

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
  } catch (error) {}
};
