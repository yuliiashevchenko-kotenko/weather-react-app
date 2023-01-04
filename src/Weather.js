import React from "react";

import "./index.css";
export default function Weather() {
  return (
    <div className="App">
      <div class="weather-container">
        <form class="search-form" id="search-form">
          <div class="input-group mb-3">
            <input
              type="search"
              class="form-control"
              placeholder="Enter a city"
              autofocus="on"
              autocomplete="off"
              id="city-input"
            />
            <button type="submit" value="search" class="btn btn-success">
              Search
            </button>
            <span>
              <button
                class="btn btn-primary w-100"
                id="current-location-button"
              >
                Current
              </button>
            </span>
          </div>

          <h1 id="city">Chernivtsi</h1>
        </form>

        <span class="temperature" id="temperature">
          {" "}
          20{" "}
        </span>
        <span class="units">
          <span id="fahrenheit">
            <strong>°F</strong>
          </span>
        </span>
        <span class="weather-icon">
          <img
            src="https://openweathermap.org/img/wn/04d@4x.png"
            alt="icon"
            id="icon"
          />
        </span>

        <ul>
          <li>
            Pressure:{"120"} hPa
            <span class="pressure" id="pressure">
              {" "}
            </span>
          </li>
          <li>
            Humidity: {"60"} %
            <span class="humidity" id="humidity">
              {" "}
            </span>
          </li>
          <li>
            Description: Cloudy
            <span class="description" id="description"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
