import React, { useState } from "react";

import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }
  function search() {
    let apiKey = "f5029b784306910c19746e40c14d6cd3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div class="container">
        <div class="weather-container">
          <form onSubmit={handleSubmit} class="search-form" id="search-form">
            <div class="input-group mb-3">
              <input
                type="search"
                class="form-control"
                placeholder="Enter a city"
                autofocus="on"
                autocomplete="off"
                id="city-input"
                onChange={handleCityChange}
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

            <WeatherInfo data={weatherData} />
          </form>

          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
