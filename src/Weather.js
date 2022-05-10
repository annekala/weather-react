import React from "react";
import App from "./App";

export default function Weather() {
  return (
    <div className="weather">
      <App city="New York" />

      <p className="codes">
        This Weather App was coded by Anne Kala and is {""}
        <a
          href="https://github.com/annekala/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}
