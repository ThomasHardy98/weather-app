import "./WeatherIcon.scss";

interface WeatherIconProps {
  icon: string | undefined;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
  return (
    <div className="weather-icon-wrapper">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
        className="weather-icon"
      />
    </div>
  );
};

export default WeatherIcon;
