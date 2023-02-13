import { useContext, useState, useEffect, Fragment } from "react";

import InputField from "components/Form/InputField";
import ErrorModal from "../Modal/ErrorModal";

import { LocationContext } from "~/context/location-context";
import { LocationContextType } from "~/@types/location";
import { GetLocation, GetWeatherInfo } from "~/api/weather";

const LocationForm = () => {
  const { updateLocation, updateWeatherInfo } = useContext(
    LocationContext
  ) as LocationContextType;
  const [locationInput, setLocationInput] = useState("");
  const [error, setError] = useState(false);

  const inputChangeHandler = (event: string) => {
    setLocationInput(event);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let locationData = {
      name: "",
      lon: "",
      lat: "",
    };

    try {
      locationData = await GetLocation(locationInput);
      updateLocation(locationData);
    } catch (error) {
      setError(true);
    }

    try {
      const weatherInfo = await GetWeatherInfo(
        locationData.lat,
        locationData.lon
      );
      updateWeatherInfo(weatherInfo);
    } catch (error) {
      setError(true);
    }
  };

  // Get users real position on page load
  useEffect(() => {
    const getWeatherInfo = async (currentLat: string, currentLon: string) => {
      try {
        const weatherInfo = await GetWeatherInfo(currentLat, currentLon);
        updateWeatherInfo(weatherInfo);
      } catch (error) {
        setError(true);
      }
    };

    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherInfo(
        position.coords.latitude.toString(),
        position.coords.longitude.toString()
      );
    });
  }, []);

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
