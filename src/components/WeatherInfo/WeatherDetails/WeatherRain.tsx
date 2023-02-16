import "./WeatherRain.scss";

interface WeatherRainProps {
  rain: string | undefined;
}

const WeatherRain = ({ rain }: WeatherRainProps) => {
  return (
    <div className="weather-rain">
      Rain: <b>{rain} mm/h</b>
    </div>
  );
};

export default WeatherRain;
