import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  console.log(data.list.length);
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather icon"
                    className="icon-small"
                  />
                  <label className="day"> {forecastDays[idx]} </label>
                  <label className="description">
                    {item.weather[0].main}, {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {item.main.temp_min}°C /{item.main.temp_max}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid">
                <div className="grid-item">
                  <label> Feels Like : </label>
                  <label>{item.main.feels_like} °C</label>
                </div>
                <div className="grid-item">
                  <label> Pressure : </label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="grid-item">
                  <label> Sea Level : </label>
                  <label>{item.main.grnd_level} m</label>
                </div>
                <div className="grid-item">
                  <label> Humidity : </label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="grid-item">
                  <label> Clouds : </label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="grid-item">
                  <label> Wind Speed : </label>
                  <label>{item.wind.speed} m/s</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
