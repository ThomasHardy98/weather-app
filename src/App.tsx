import LocationForm from "components/Form/LocationForm";
import WeatherOutput from "./components/WeatherInfo/WeatherOutput";

import "App.css";

function App() {
  return (
    <div className="App">
      <LocationForm />
      <WeatherOutput />
    </div>
  );
}

export default App;
