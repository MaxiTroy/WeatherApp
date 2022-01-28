import React, { useState } from "react";
import cities from "../lib/city.list.json";
import Link from "next/link";

const searchbox = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    let machingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (machingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };
          machingCities.push(cityData);
        }
      }
    }
    setResult(machingCities);
  };

  return (
    <div>
      <input type="text" placeholder="buscar" onChange={handleChange} />
      {result.length > 0 ? (
        result.map((item) => {
          <li key={item.slug}>
            <Link href={`/location/${item.slug}`}>
              <a>
                {item.name}
                {item.state ? `, ${item.state}` : ""} //', ' + {item.name}
                <span>{item.country}</span>
              </a>
            </Link>
          </li>;
        })
      ) : (
        <li>No hay resultados</li>
      )}
    </div>
  );
};

export default searchbox;
