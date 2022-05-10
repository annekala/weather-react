import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-md-6">
          <h1>{props.data.city}</h1>
          <ul className="element">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="clearfix show-temperature">
          <div className="shift-temperature">
            <WeatherIcon code={props.data.icon} />
            <Temperature celsius={props.data.temperature} />
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
