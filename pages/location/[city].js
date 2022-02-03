import React from "react";
import cities from "../../lib/city.list.json";
import Head from "next/head";
import TodaysWeather from "../../componets/TodaysWeather";
import moment from "moment-timezone";

export const getServerSideProps = async (context) => {
  const city = getCity(context.params.city);

  if (!city) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);

  return {
    props: {
      city: city,
      timezone: data.timezone,
      currentWeather: data.current,
      dailyWeather: data.daily,
      hourlyWeather: hourlyWeather,
    },
  };
};

const getHourlyWeather = (houtlyData, timezone) => {
  const endOfDay = moment().tz(timezone).endOf("day").valueOf();
  const endTimeStamp = Math.floor(endOfDay / 1000);

  const todaysData = houtlyData.filter((data) => data.dt < endTimeStamp);

  return todaysData;
};

const getCity = (param) => {
  const cityParam = param.trim();
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length - 1];
  if (!id) return null;

  const city = cities.find((city) => city.id.toString() == id);
  if (city) return city;
  else return null;
};
const City = ({
  hourlyWeather,
  currentWeather,
  dailyWeather,
  city,
  timezone,
}) => {
  return (
    <div>
      <Head>
        <title>{city.name}</title>
      </Head>

      <div className="page-wrapper">
        <div className="container">
          <TodaysWeather
            city={city}
            weather={dailyWeather[0]}
            timezone={timezone}
          />
        </div>
      </div>
    </div>
  );
};

export default City;
