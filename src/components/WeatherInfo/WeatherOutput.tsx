import { Fragment, useContext } from "react";

import { LocationContext } from "~/context/location-context";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./WeatherOutput.scss";

const WeatherOutput = () => {
  const locCtx = useContext(LocationContext);

  // If context isn't loading and values exist for context, return the weather
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
                Last updated: {locCtx?.weatherInfo?.localTime} (Local time)
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
