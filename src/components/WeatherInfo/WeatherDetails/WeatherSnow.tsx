import "./WeatherSnow.scss";

interface WeatherSnowProps {
  snow: string | undefined;
}

// City's weathers snow component
const WeatherSnow = ({ snow }: WeatherSnowProps) => {
  return (
    <div className="weather-rain">
      Snow: <b>{snow} mm/h</b>
    </div>
  );
};

export default WeatherSnow;
