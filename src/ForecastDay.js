import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="date-forecast">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />

      <div className="temperature-forecast">
        <span className="temperature-forecast-min">{minTemperature()}</span>/
        <span className="temperature-forecast-max">{maxTemperature()}</span>
      </div>
    </div>
  );
}
