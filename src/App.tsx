import { useEffect, useContext, Fragment } from "react";

import { LocationContext } from "./context/location-context";

import LocationForm from "components/Form/LocationForm";
import WeatherOutput from "./components/WeatherInfo/WeatherOutput";

import "App.scss";

function App() {
  const locCtx = useContext(LocationContext);

  useEffect(() => {
    const storedData = localStorage.getItem("storedLocationName");

    if (!storedData) {
      const getWeatherInfo = async (currentLat: string, currentLon: string) => {
        try {
          locCtx.updateLocationData(currentLat, currentLon, true, "");
        } catch (error) {
          console.log(error);
        }
      };

      const setDefaultWeatherInfo = async (location: string) => {
        try {
          locCtx.updateLocationData("", "", false, location);
        } catch (error) {
          console.log(error);
        }
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeatherInfo(
            position.coords.latitude.toString(),
            position.coords.longitude.toString()
          );
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED) {
            setDefaultWeatherInfo("London");
          }
        }
      );
    }
  }, []);

  return (
    <div>
      {locCtx?.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <LocationForm />
          <WeatherOutput />
        </Fragment>
      )}
    </div>
  );
}

export default App;
