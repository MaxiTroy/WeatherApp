import Head from "next/head";
import Searchbox from "../componets/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>weather app -Next </title>
      </Head>

      <div
        className="home"
        // style={{
        //   width: "100vw",
        //   minHeight: "100vh",
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        // }}
      >
        <div
          className="container"
          // style={{
          //   position: "relative",
          //   maxWidth: "800px",
          //   margin: " 0 auto",
          //   paddingLeft: "15px",
          //   paddingRight: "15px",
          //   width: "100%",
          // }}
        >
          <Searchbox />
        </div>
      </div>
    </div>
  );
}
