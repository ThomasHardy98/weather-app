import { useEffect, useState } from "react";
import "./WeatherIcon.scss";

interface WeatherIconProps {
  icon: string | undefined;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    switch (icon) {
      // Clear skies
      case "01d":
        setWeatherIcon("src/assets/clear-skies-day.png");
        break;
      case "01n":
        setWeatherIcon("src/assets/clear-skies-night.png");
        break;
      // Few clouds
      case "02d":
        setWeatherIcon("src/assets/few-clouds-day.png");
        break;
      case "02n":
        setWeatherIcon("src/assets/few-clouds-night.png");
        break;
      // Scattered clouds
      case "03d":
      case "03n":
        setWeatherIcon("src/assets/scattered-clouds-day.png");
        break;
      // Broken clouds
      case "04d":
      case "04n":
        setWeatherIcon("src/assets/broken-clouds-day.png");
        break;
      // Shower rain
      case "09d":
        setWeatherIcon("src/assets/shower-rain-day.png");
        break;
      case "09n":
        setWeatherIcon("src/assets/shower-rain-night.png");
        break;
      // Rain
      case "10d":
      case "10n":
        setWeatherIcon("src/assets/rain-day.png");
        break;
      // Thunderstorms
      case "11d":
      case "11n":
        setWeatherIcon("src/assets/thunderstorms-day.png");
        break;
      // Snow
      case "13d":
        setWeatherIcon("src/assets/snow-day.png");
        break;
      case "13n":
        setWeatherIcon("src/assets/snow-night.png");
        break;
      // Mist
      case "50d":
        setWeatherIcon("src/assets/mist-day.png");
        break;
      case "50n":
        setWeatherIcon("src/assets/mist-night.png");
        break;
    }
  }, []);

  return (
    <div className="weather-icon-wrapper">
      <img src={weatherIcon} alt="Weather icon" className="weather-icon" />
    </div>
  );
};

export default WeatherIcon;
