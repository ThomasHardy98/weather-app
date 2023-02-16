import { Fragment, useContext } from "react";

import { LocationContext } from "~/context/location-context";
import { setBodyColor } from "~/helpers/background-change";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./WeatherOutput.scss";

const WeatherOutput = () => {
  const locCtx = useContext(LocationContext);

  if (locCtx.weatherInfo?.snow) {
    console.log("Snow!");
  } else if (locCtx.weatherInfo?.rain) {
    console.log("Rain!");
  } else {
    console.log("Clear!");
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
            <Card>
              <div className="weather-wrapper">
                <div className="weather-icon-wrapper">
                  <img
                    src={`http://openweathermap.org/img/wn/${locCtx?.weatherInfo?.icon}@2x.png`}
                  />
                </div>
                <div className="weather-info-wrapper">
                  <div className="city-container">
                    <div>{locCtx?.location?.name}</div>
                  </div>
                  <div>{locCtx?.weatherInfo?.description}</div>
                  <div>{locCtx?.weatherInfo?.temp}</div>
                  <div>{locCtx?.weatherInfo?.wind.speed}</div>
                  <div>{locCtx?.weatherInfo?.wind.deg}</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="last-updated-container">
            <Card>
              <div className="last-updated-text">
                Last updated:{" "}
                {locCtx?.weatherInfo?.localTime.substring(
                  0,
                  locCtx?.weatherInfo?.localTime.lastIndexOf(":")
                )}{" "}
                (Local time)
              </div>
            </Card>
          </div>
        </Fragment>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
};

export default WeatherOutput;
