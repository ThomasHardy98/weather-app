import "./WeatherDescription.scss";

interface WeatherDescriptionProps {
  description: string | undefined;
}

const WeatherDescription = ({ description }: WeatherDescriptionProps) => {
  return <div className="weather-description">{description}</div>;
};

export default WeatherDescription;
