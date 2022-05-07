import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="row">
        <div className="col-md-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="element">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="element-clouds">{props.data.description}</li>
          </ul>
        </div>

        <div className="clearfix show-temperature">
          <div className="shift-temperature">
            <WeatherIcon code={props.data.icon} />

            <strong>{Math.round(props.data.temperature)}</strong>
            <span className="units">
              <a href="/" className="active">
                °C{" "}
              </a>
              |
              <a href="/" className="active">
                °F
              </a>
            </span>
          </div>
        </div>
        <ul className="shift">
          <li>
            Humidity: <span> {props.data.humidity} </span> %
          </li>
          <li>
            Wind: <span> {props.data.wind} </span> mph
          </li>
        </ul>
      </div>
    </div>
  );
}
