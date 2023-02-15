import { Fragment, useContext } from "react";

import { LocationContext } from "~/context/location-context";

import Card from "../UI/Card";

const WeatherOutput = () => {
  const locCtx = useContext(LocationContext);

  // If context isn't loading and values exist for context, return the weather
  return (
    <Fragment>
      {!locCtx?.isLoading && locCtx.weatherInfo && (
        <Card>
          <div>Today</div>
          <div>{locCtx?.location?.name}</div>
          <div>{locCtx?.weatherInfo?.description}</div>
          <div>{locCtx?.weatherInfo?.temp}</div>
          <div>{locCtx?.weatherInfo?.wind.speed}</div>
          <div>{locCtx?.weatherInfo?.wind.deg}</div>
          <img
            src={`http://openweathermap.org/img/wn/${locCtx?.weatherInfo?.icon}@2x.png`}
          />
        </Card>
      )}
    </Fragment>
  );
};

export default WeatherOutput;
