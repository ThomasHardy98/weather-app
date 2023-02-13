import { useContext, useState, Fragment } from "react";
import axios from "axios";

import InputField from "components/Form/InputField";
import ErrorModal from "../Modal/ErrorModal";

import { LocationContext } from "~/context/location-context";
import { LocationContextType } from "~/@types/location";

const LocationForm = () => {
  const { updateLocation } = useContext(LocationContext) as LocationContextType;
  const [locationInput, setLocationInput] = useState("");
  const [error, setError] = useState(false);
  const limit = 1;

  const inputChangeHandler = (event: string) => {
    setLocationInput(event);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let locationCoords = { lat: "", lon: "" };
    let locationName = "";

    try {
      const res = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=${limit}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      locationCoords = { lat: res.data[0].lat, lon: res.data[0].lon };
      locationName = `${res.data[0].name}, ${res.data[0].state}`;
    } catch (err) {
      setError(true);
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          locationCoords.lat
        }&lon=${locationCoords.lon}&appid=${
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

      updateLocation(locationName, weatherInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Fragment>
      {error && <ErrorModal errorText="Please enter a valid location." />}
      <form id="locationForm" onSubmit={submitHandler}>
        <InputField
          onChange={inputChangeHandler}
          name="location"
          placeholder="Enter your city"
          value={locationInput}
        />
      </form>
    </Fragment>
  );
};

export default LocationForm;
