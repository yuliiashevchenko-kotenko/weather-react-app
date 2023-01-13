import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <div class="date">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </div>
      </ul>

      <div class="parameters">
        <div class="row mt-3">
          <div class="col-6">
            <div className="d-flex">
              <span class="temperature" id="temperature">
                <WeatherTemperature
                  celsius={Math.round(props.data.temperature)}
                />
                <span class="units"></span>
              </span>
              <span className="Icon">
                <WeatherIcon
                  code={props.data.icon}
                  size={60}
                  alt={props.data.description}
                />
              </span>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Pressure:{" "}
                <span class="pressure" id="pressure">
                  {props.data.pressure} hPa
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span class="humidity" id="humidity">
                  {props.data.humidity} %
                </span>
              </li>
              <li>
                Description:
                <span class="description" id="description">
                  {" "}
                  {props.data.description}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
