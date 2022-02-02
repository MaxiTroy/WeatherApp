import React from "react";
import cities from "../../lib/city.list.json";

export const getServerSideProps = async (context) => {
  const city = getCity(context.params.city);
  console.log(city);
  const slug = context.params.city;
  console.log("context", context.params);
  return {
    props: {
      slug: slug,
    },
  };
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
const City = ({ slug }) => {
  return (
    <div>
      <h1>City Page</h1>
      <h2>{slug}</h2>
    </div>
  );
};

export default City;
