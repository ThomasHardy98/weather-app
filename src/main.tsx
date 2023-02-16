import ReactDOM from "react-dom/client";

import App from "App";
import LocationProvider from "./hooks/useLocation";

import "main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LocationProvider>
    <App />
  </LocationProvider>
);
