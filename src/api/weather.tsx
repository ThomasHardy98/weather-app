import axios from "axios";

import currentTime from "~/helpers/timezone-conversion";

// Function called to get the users location based off input and find out the weather in said location
export const GetLocation = async (
  current: boolean,
  locationInput?: string,
  lat?: string,
  lon?: string
) => {
  let locationRes;

  if (current) {
    // Attempt to receive a response from the API using the users lat and lon values from geolocation
    try {
      locationRes = await axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
    } catch (error) {
      // Throw error back to where it was called
      throw error;
    }
  } else {
    // Attempt to receive a response from the API using the users location input to get a lat, lon and name value
    try {
      locationRes = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=1&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
    } catch (error) {
      // Throw error back to where it was called
      throw error;
    }
  }

  // If a location response has been received
  if (locationRes) {
    // Set a location object to contain the response data
    const location = {
      name: locationRes.data[0].name,
      lon: locationRes.data[0].lon,
      lat: locationRes.data[0].lat,
    };

    let weatherRes;

    // Attempt to receive a response from the API using the location objects lat and lon values
    try {
      weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          location.lat
        }&lon=${location.lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
    } catch (error) {
      // Throw error back to where it was called
      throw error;
    }

    // If weather response has been received
    if (weatherRes) {
      // Call a currentTime helper function to get the local time of the location received
      const localTime = currentTime(
        weatherRes.data.dt,
        weatherRes.data.timezone
      );

      // Create a weatherInfo object to store all the response data
      let weatherInfo = {
        description: weatherRes.data.weather[0].description,
        icon: weatherRes.data.weather[0].icon,
        temp: Math.round(weatherRes.data.main.temp),
        tempMax: Math.round(weatherRes.data.main.temp_max),
        tempMin: Math.round(weatherRes.data.main.temp_min),
        feelsLike: Math.round(weatherRes.data.main.feels_like),
        humidity: Math.round(weatherRes.data.main.humidity),
        wind: {
          speed: Math.round(weatherRes.data.wind.speed),
        },
        localTime,
      };

      // If there was a response with a rain value
      if (weatherRes.data.rain) {
        // Add the rain value to the object
        let newWeather = { rain: weatherRes.data?.rain["1h"], ...weatherInfo };
        // Overwrite the previous object
        weatherInfo = newWeather;
      }

      // If there was a response with a snow value
      if (weatherRes.data.snow) {
        // Add the snow value to the object
        let newWeather = { snow: weatherRes.data?.snow["1h"], ...weatherInfo };
        // Overwrite the previous object
        weatherInfo = newWeather;
      }

      // Create a locationData object to hold all returnable data
      const locationData = {
        location,
        weatherInfo,
      };

      // Return the response data that has been formatted correctly
      return locationData;
    }
  }
};
