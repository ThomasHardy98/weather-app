import { useContext } from "react";

import { LocationContext } from "~/context/location-context";

import Card from "~/components/UI/Card";
import WeatherCity from "./WeatherCity";
import WeatherDescription from "./WeatherDescription";
import WeatherHumidity from "./WeatherHumidity";
import WeatherTemperature from "./WeatherTemperature";
import WeatherTemperatureFeelsLike from "./WeatherTemperatureFeelsLike";
import WeatherTemperatureMaxMin from "./WeatherTemperatureMaxMin";
import WeatherWindSpeed from "./WeatherWindSpeed";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInformation.scss";

const WeatherInformation = () => {
  const locCtx = useContext(LocationContext);

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
        </div>
      </div>
    </Card>
  );
};

export default WeatherInformation;
