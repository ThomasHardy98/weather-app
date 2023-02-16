import "./WeatherHumidity.scss";

interface WeatherHumidityProps {
  humidity: number | undefined;
}

const WeatherHumidity = ({ humidity }: WeatherHumidityProps) => {
  return (
    <div className="weather-temperature-humidity">
      Humidity: <strong>{humidity}%</strong>
    </div>
  );
};

export default WeatherHumidity;
