import { Fragment, useContext } from "react";

import { LocationContext } from "~/context/location-context";
import { setBodyColor } from "~/helpers/background-change";

import LoadingSpinner from "../UI/LoadingSpinner";
import LastUpdated from "./LastUpdated";
import WeatherInformation from "./WeatherDetails/WeatherInformation";

import "./WeatherOutput.scss";

const WeatherOutput = () => {
  const locCtx = useContext(LocationContext);

  if (locCtx.weatherInfo?.snow) {
  } else if (locCtx.weatherInfo?.rain) {
  } else {
  }

  const array = locCtx.weatherInfo?.localTime.split(":");
  let seconds = 0;
  if (locCtx.weatherInfo?.localTime) {
    seconds =
      parseInt(array![0], 10) * 60 * 60 +
      parseInt(array![1], 10) * 60 +
      parseInt(array![2], 10);
  }

  if (seconds >= 21600 && seconds <= 36000) {
    setBodyColor("morning_gradient");
  } else if (seconds >= 36001 && seconds <= 57600) {
    setBodyColor("midday_gradient");
  } else if (seconds >= 57601 && seconds <= 75600) {
    setBodyColor("evening_gradient");
  } else {
    setBodyColor("night_gradient");
  }

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
