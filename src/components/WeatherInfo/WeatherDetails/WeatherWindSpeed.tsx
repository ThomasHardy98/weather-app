import "./WeatherWindSpeed.scss";

interface WeatherWindSpeedProps {
  windSpeed: number | undefined;
}

// City's weathers wind speed component
const WeatherWindSpeed = ({ windSpeed }: WeatherWindSpeedProps) => {
  return (
    <div className="wind-speed">
      Wind Speed: <b>{windSpeed} mph</b>
    </div>
  );
};

export default WeatherWindSpeed;
