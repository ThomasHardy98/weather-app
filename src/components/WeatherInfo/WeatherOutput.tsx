import { Fragment, useContext } from "react";

import { LocationContext } from "~/context/location-context";

const WeatherOutput = () => {
  const locCtx = useContext(LocationContext);

  return (
    <Fragment>
      <div>Today</div>
      <div>{locCtx?.locationName}</div>
      <div>{locCtx?.weatherInfo?.description}</div>
      <div>{locCtx?.weatherInfo?.temp}</div>
      <div>{locCtx?.weatherInfo?.wind.speed}</div>
      <div>{locCtx?.weatherInfo?.wind.deg}</div>
      <div>{locCtx?.weatherInfo?.wind.gust}</div>
      <div>{locCtx?.weatherInfo?.icon}</div>
    </Fragment>
  );
};

export default WeatherOutput;
