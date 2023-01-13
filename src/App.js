import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://yuliiashk-portfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuliia Shevchenko-Kotenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yuliiashevchenko-kotenko/react-weather-app-yuliia"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://magnificent-donut-83af5b.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
