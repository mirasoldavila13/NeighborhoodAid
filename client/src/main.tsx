import "../src/input.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOM from "react-dom/client";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
