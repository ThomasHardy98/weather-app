import LocationForm from "components/Form/LocationForm";
import WeatherOutput from "./components/WeatherInfo/WeatherOutput";

import "App.scss";

function App() {
  return (
    <div>
      <LocationForm />
      <WeatherOutput />
    </div>
  );
}

export default App;
