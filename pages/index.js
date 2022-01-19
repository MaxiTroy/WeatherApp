import Head from "next/head";
import Searchbox from "../componets/searchbox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>weather app -Next </title>
      </Head>

      <div>
        <div>
          <Searchbox />
        </div>
      </div>
    </div>
  );
}
