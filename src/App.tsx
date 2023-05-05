import { useEffect, useContext, Fragment } from "react";

import { LocationContext } from "./context/location-context";

import LocationForm from "components/Form/LocationForm";
import WeatherOutput from "./components/WeatherInfo/WeatherOutput";
import ErrorModal from "./components/Modal/ErrorModal";

import "App.scss";

// Main app component
function App() {
  const locCtx = useContext(LocationContext);

  // On first load check if there's local storage
  useEffect(() => {
    const storedData = localStorage.getItem("storedLocationName");

    // If no local storage
    if (!storedData) {
      const getWeatherInfo = (currentLat: string, currentLon: string) => {
        locCtx.updateLocationData(currentLat, currentLon, true, "");
      };

      const setDefaultWeatherInfo = (location: string) => {
        locCtx.updateLocationData("", "", false, location);
      };

      // Use geolocation to get users current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Send lat and lon values of user to get the current location weather
          getWeatherInfo(
            position.coords.latitude.toString(),
            position.coords.longitude.toString()
          );
        },
        function (error) {
          // If user declines location sharing, set default weather location to London
          if (error.code == error.PERMISSION_DENIED) {
            setDefaultWeatherInfo("London");
          }
        }
      );
    }
  }, []);

  // Close error handler function
  const closeError = () => {
    locCtx.setError(false);
  };

  // If the location context error is set to true, show the error modal with the custom text else show weather
  return (
    <Fragment>
      {locCtx.error ? (
        <ErrorModal
          errorText="Please enter a valid city"
          onClick={closeError}
        />
      ) : (
        <div className="container">
          <LocationForm />
          <WeatherOutput />
        </div>
      )}
    </Fragment>
  );
}

export default App;
