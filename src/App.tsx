import { useEffect, useContext, Fragment } from "react";

import { LocationContext } from "./context/location-context";

import LocationForm from "components/Form/LocationForm";
import WeatherOutput from "./components/WeatherInfo/WeatherOutput";
import ErrorModal from "./components/Modal/ErrorModal";

function App() {
  const locCtx = useContext(LocationContext);

  useEffect(() => {
    const storedData = localStorage.getItem("storedLocationName");

    if (!storedData) {
      const getWeatherInfo = async (currentLat: string, currentLon: string) => {
        locCtx.updateLocationData(currentLat, currentLon, true, "");
      };

      const setDefaultWeatherInfo = async (location: string) => {
        locCtx.updateLocationData("", "", false, location);
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

  const closeError = () => {
    locCtx.setError(false);
  };

  return (
    <Fragment>
      {locCtx.error ? (
        <ErrorModal
          errorText="Please enter a valid city"
          onClick={closeError}
        />
      ) : (
        <Fragment>
          <LocationForm />
          <WeatherOutput />
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
