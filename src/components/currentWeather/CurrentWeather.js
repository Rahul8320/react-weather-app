import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city.split(",")[0]}</p>
          <p className="city-desc">
            <span>
              {data.city.split(",")[1]}, {data.city.split(",")[2]}
            </span>
          </p>
          <p className="weather-description">
            <span> {data.weather[0].main} ,</span>
            <span> {data.weather[0].description} </span>
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="Weather icon png"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label"> Details </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Feels Like </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Wind </span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Humidity </span>
            <span className="parameter-value"> {data.main.humidity} % </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Clouds </span>
            <span className="parameter-value"> {data.clouds.all} % </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Pressure </span>
            <span className="parameter-value"> {data.main.pressure} hPa </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
