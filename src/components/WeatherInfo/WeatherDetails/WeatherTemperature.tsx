import "./WeatherTemperature.scss";

interface WeatherTemperatureProps {
  temperature: number | undefined;
}

// City's weathers temperature component
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
