import "./WeatherTemperatureMaxMin.scss";

interface WeatherTemperatureMaxMinProps {
  temperatureMax: number | undefined;
  temperatureMin: number | undefined;
}

const WeatherTemperatureMaxMin = ({
  temperatureMax,
  temperatureMin,
}: WeatherTemperatureMaxMinProps) => {
  return (
    <div className="weather-temperature-max-min">
      <div className="weather-temperature-max">
        Highs:{" "}
        <div className="bold-text">
          {temperatureMax}
          <p className="superscript-small">
            <sup>o</sup>C
          </p>
        </div>
      </div>
      <div className="weather-temperature-min">
        Lows:{" "}
        <div className="bold-text">
          {temperatureMin}
          <p className="superscript-small">
            <sup>o</sup>C
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherTemperatureMaxMin;
