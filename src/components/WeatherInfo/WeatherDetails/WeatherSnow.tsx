import "./WeatherSnow.scss";

interface WeatherSnowProps {
  snow: string | undefined;
}

const WeatherSnow = ({ snow }: WeatherSnowProps) => {
  return (
    <div className="weather-rain">
      Snow: <b>{snow} mm/h</b>
    </div>
  );
};

export default WeatherSnow;
