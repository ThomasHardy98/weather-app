import "./WeatherRain.scss";

interface WeatherRainProps {
  rain: string | undefined;
}

// City's weathers rain component
const WeatherRain = ({ rain }: WeatherRainProps) => {
  return (
    <div className="weather-rain">
      Rain: <b>{rain} mm/h</b>
    </div>
  );
};

export default WeatherRain;
