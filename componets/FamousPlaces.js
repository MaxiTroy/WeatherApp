import React from "react";
import Image from "next/image";
import Link from "next/link";
import LondonImage from "../public/images/london.jpg";
import NewYorkImage from "../public/images/new-york.jpg";
import ParisImage from "../public/images/paris.jpg";
import TokyoImage from "../public/images/tokyo.jpg";

const places = [
  {
    name: "London",
    image: LondonImage,
    url: "/location/london-2643743",
  },
  {
    name: "NewYork",
    image: NewYorkImage,
    url: "/location/new-york-city-5128581",
  },
  {
    name: "Paris",
    image: ParisImage,
    url: "/location/paris-2968815",
  },
  {
    name: "Tokyo",
    image: TokyoImage,
    url: "/location/tokyo-1850147",
  },
];

const FamousPlaces = () => {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((places, index) => (
            <div className="places__box">
              <Link href={places.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={places.image}
                      alt={places.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <span>{places.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FamousPlaces;
