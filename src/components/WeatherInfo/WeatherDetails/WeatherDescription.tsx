import "./WeatherDescription.scss";

interface WeatherDescriptionProps {
  description: string | undefined;
}

// City's weathers description component
const WeatherDescription = ({ description }: WeatherDescriptionProps) => {
  return <div className="weather-description">{description}</div>;
};

export default WeatherDescription;
