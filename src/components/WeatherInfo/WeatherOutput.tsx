import { Fragment, useContext } from "react";

import { LocationContext } from "~/context/location-context";
import { setBodyColor } from "~/helpers/background-change";

import LoadingSpinner from "../UI/LoadingSpinner";
import LastUpdated from "./LastUpdated";
import WeatherInformation from "./WeatherInformation";

import "./WeatherOutput.scss";
import "./SnowEffect.scss";
import "./RainEffect.scss";

// Main weather output component, called from App
const WeatherOutput = () => {
  const locCtx = useContext(LocationContext);

  // Using the context, if the response contains snow, add snow effect to background
  if (locCtx.weatherInfo?.snow) {
    document.getElementById("weather-root")!.className = "";
    document.getElementById("weather-root")!.classList.add("snow");
  } else if (locCtx.weatherInfo?.rain) {
    // if the response contains rain, add rain effect to background
    document.getElementById("weather-root")!.className = "";
    document.getElementById("weather-root")!.classList.add("rain");
  } else {
    // if the response contains neither rain nor snow, remove all effects from background
    document.getElementById("weather-root")!.className = "";
  }

  // Calculate the current local time received in seconds
  const array = locCtx.weatherInfo?.localTime.split(":");
  let seconds = 0;
  if (locCtx.weatherInfo?.localTime) {
    seconds =
      parseInt(array![0], 10) * 60 * 60 +
      parseInt(array![1], 10) * 60 +
      parseInt(array![2], 10);
  }

  // Using the seconds, calculate how many hours from midnight to time and set background gradient
  if (seconds >= 21600 && seconds <= 36000) {
    // 6am to 10am
    setBodyColor("morning_gradient");
  } else if (seconds >= 36001 && seconds <= 57600) {
    // 10:01am to 4pm
    setBodyColor("midday_gradient");
  } else if (seconds >= 57601 && seconds <= 75600) {
    // 4:01pm to 9pm
    setBodyColor("evening_gradient");
  } else {
    // 9:01pm to 5:59am
    setBodyColor("night_gradient");
  }

  // Return loading if the context says its loading, else return the weather information
  return (
    <Fragment>
      {!locCtx.isLoading && locCtx.weatherInfo ? (
        <Fragment>
          <div className="weather-info-container">
            <div className="date-text">Today</div>
            <WeatherInformation />
          </div>
          <LastUpdated localTime={locCtx.weatherInfo.localTime} />
        </Fragment>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
};

export default WeatherOutput;
