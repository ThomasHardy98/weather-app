import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import LocationProvider from "./hooks/useLocation";

import "main.scss";

// Wrap location provider around app as most elements need access to it's context
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>
);
