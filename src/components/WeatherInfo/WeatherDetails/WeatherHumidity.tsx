import "./WeatherHumidity.scss";

interface WeatherHumidityProps {
  humidity: number | undefined;
}

// City's weathers humidity component
const WeatherHumidity = ({ humidity }: WeatherHumidityProps) => {
  return (
    <div className="weather-temperature-humidity">
      Humidity: <strong>{humidity}%</strong>
    </div>
  );
};

export default WeatherHumidity;
