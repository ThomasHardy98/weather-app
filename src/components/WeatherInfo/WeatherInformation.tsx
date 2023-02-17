import { useContext } from "react";

import { LocationContext } from "~/context/location-context";

import Card from "~/components/UI/Card";
import WeatherCity from "./WeatherDetails/WeatherCity";
import WeatherDescription from "./WeatherDetails/WeatherDescription";
import WeatherHumidity from "./WeatherDetails/WeatherHumidity";
import WeatherTemperature from "./WeatherDetails/WeatherTemperature";
import WeatherTemperatureFeelsLike from "./WeatherDetails/WeatherTemperatureFeelsLike";
import WeatherTemperatureMaxMin from "./WeatherDetails/WeatherTemperatureMaxMin";
import WeatherWindSpeed from "./WeatherDetails/WeatherWindSpeed";
import WeatherRain from "./WeatherDetails/WeatherRain";
import WeatherSnow from "./WeatherDetails/WeatherSnow";
import WeatherIcon from "./WeatherDetails/WeatherIcon";

import "./WeatherInformation.scss";

// Weather information component, brings together all the small detail components, feeds them context and styles them
const WeatherInformation = () => {
  const locCtx = useContext(LocationContext);

  // Returns all the information styled appropriately
  return (
    <Card>
      <div className="weather-wrapper">
        <WeatherIcon icon={locCtx.weatherInfo!.icon} />
        <div className="weather-info-wrapper">
          <WeatherCity city={locCtx.location?.name} />
          <WeatherDescription description={locCtx.weatherInfo!.description} />
          <WeatherTemperature temperature={locCtx.weatherInfo!.temp} />
          <WeatherTemperatureMaxMin
            temperatureMax={locCtx.weatherInfo!.tempMax}
            temperatureMin={locCtx.weatherInfo!.tempMin}
          />
          <WeatherTemperatureFeelsLike
            feelsLike={locCtx.weatherInfo!.feelsLike}
          />
          <WeatherWindSpeed windSpeed={locCtx.weatherInfo!.wind.speed} />
          <WeatherHumidity humidity={locCtx.weatherInfo!.humidity} />
          {locCtx.weatherInfo?.rain && (
            <WeatherRain rain={locCtx.weatherInfo.rain} />
          )}
          {locCtx.weatherInfo?.snow && (
            <WeatherSnow snow={locCtx.weatherInfo.snow} />
          )}
        </div>
      </div>
    </Card>
  );
};

export default WeatherInformation;
