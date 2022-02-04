import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

const WeeklyWeather = ({ weeklyWeather, timezone }) => {
  console.log(typeof weeklyWeather);
  return (
    <div className="weekly">
      <h3 className="weekly__title">
        Weekly <span>weather</span>
      </h3>

      {weeklyWeather.length > 0 &&
        weeklyWeather.map((weekly, index) => {
          if (index == 0) {
            return;
          }

          return (
            <div className="weekly__card" key={weekly.dt}>
              <div className="weekly__inner">
                <div className="weekly__left-content">
                  <div>
                    <h3>
                      {moment.unix(weekly.dt).tz(timezone).format("dddd")}
                    </h3>

                    <h4>
                      <span>{weekly.temp.max.toFixed(0)}&deg;C</span>
                      <span>{weekly.temp.min.toFixed(0)}&deg;C</span>
                    </h4>
                  </div>

                  <div className="weekly__sun-times">
                    <div>
                      <span>Sunrise</span>
                      <span>
                        {moment.unix(weekly.sunrise).tz(timezone).format("LT")}
                      </span>
                    </div>
                  </div>

                  <div className="weekly__sun-times">
                    <div>
                      <span>Sunset</span>
                      <span>
                        {moment.unix(weekly.sunset).tz(timezone).format("LT")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="weekly__rigth-content">
                  <div className="weekly__icon-wrapper">
                    <div>
                      <Image
                        layout="fill"
                        src={`https://openweathermap.org/img/wn/${weekly.weather[0].icon}@2x.png`}
                        alt={weekly.weather[0].description}
                      />
                    </div>
                  </div>

                  <h5>{weekly.weather[0].description}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WeeklyWeather;
