import "./WeatherTemperatureFeelsLike.scss";

interface WeatherTemperatureFeelsLikeProps {
  feelsLike: number | undefined;
}

// City's weathers temperature feels like component
const WeatherTemperatureFeelsLike = ({
  feelsLike,
}: WeatherTemperatureFeelsLikeProps) => {
  return (
    <div className="weather-temperature-feels-like">
      Feels Like:{" "}
      <div className="bold-text">
        {feelsLike}
        <p className="superscript-small">
          <sup>o</sup>C
        </p>
      </div>
    </div>
  );
};

export default WeatherTemperatureFeelsLike;
