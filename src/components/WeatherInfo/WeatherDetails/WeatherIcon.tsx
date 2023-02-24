import { useEffect, useState } from "react";
import "./WeatherIcon.scss";

interface WeatherIconProps {
  icon: string | undefined;
}

// City's weathers icon component
const WeatherIcon = ({ icon }: WeatherIconProps) => {
  const [weatherIcon, setWeatherIcon] = useState("");

  // Depending on what icon value the API response returns
  useEffect(() => {
    switch (icon) {
      // Clear skies
      case "01d":
        setWeatherIcon("../../../../assets/clear-skies-day.png");
        break;
      case "01n":
        setWeatherIcon("../../../../assets/clear-skies-night.png");
        break;
      // Few clouds
      case "02d":
        setWeatherIcon("../../../../assets/few-clouds-day.png");
        break;
      case "02n":
        setWeatherIcon("../../../../assets/few-clouds-night.png");
        break;
      // Scattered clouds
      case "03d":
      case "03n":
        setWeatherIcon("../../../../assets/scattered-clouds-day.png");
        break;
      // Broken clouds
      case "04d":
      case "04n":
        setWeatherIcon("../../../../assets/broken-clouds-day.png");
        break;
      // Shower rain
      case "09d":
        setWeatherIcon("../../../../assets/shower-rain-day.png");
        break;
      case "09n":
        setWeatherIcon("../../../../assets/shower-rain-night.png");
        break;
      // Rain
      case "10d":
      case "10n":
        setWeatherIcon("../../../../assets/rain-day.png");
        break;
      // Thunderstorms
      case "11d":
      case "11n":
        setWeatherIcon("../../../../assets/thunderstorms-day.png");
        break;
      // Snow
      case "13d":
        setWeatherIcon("../../../../assets/snow-day.png");
        break;
      case "13n":
        setWeatherIcon("../../../../assets/snow-night.png");
        break;
      // Mist
      case "50d":
        setWeatherIcon("../../../../assets/mist-day.png");
        break;
      case "50n":
        setWeatherIcon("../../../../assets/mist-night.png");
        break;
    }
  }, []);

  // Return an image with a dynamic source
  return (
    <div className="weather-icon-wrapper">
      <img src={weatherIcon} alt="Weather icon" className="weather-icon" />
    </div>
  );
};

export default WeatherIcon;
