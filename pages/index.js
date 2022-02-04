import Head from "next/head";
import FamousPlaces from "../componets/FamousPlaces";
import Searchbox from "../componets/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>weather app -Next </title>
      </Head>

      <div className="home">
        <div className="container">
          <Searchbox placeholder="Search for a city..." />
          <FamousPlaces />
        </div>
      </div>
    </div>
  );
}
