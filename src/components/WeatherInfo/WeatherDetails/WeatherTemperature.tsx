import "./WeatherTemperature.scss";

interface WeatherTemperatureProps {
  temperature: number | undefined;
}

const WeatherTemperature = ({ temperature }: WeatherTemperatureProps) => {
  return (
    <div className="weather-temperature">
      {temperature}
      <p className="superscript">
        <sup>o</sup>C
      </p>
    </div>
  );
};

export default WeatherTemperature;
