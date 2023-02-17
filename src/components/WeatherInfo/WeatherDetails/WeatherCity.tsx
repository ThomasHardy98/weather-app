import "./WeatherCity.scss";

interface WeatherCityProps {
  city: string | undefined;
}

// City's name component
const WeatherCity = ({ city }: WeatherCityProps) => {
  return (
    <div className="city-container">
      <div>{city}</div>
    </div>
  );
};

export default WeatherCity;
