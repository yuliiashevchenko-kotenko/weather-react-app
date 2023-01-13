import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      {Math.round(props.celsius * 9) / 5 + 32}°F
    </div>
  );
}
