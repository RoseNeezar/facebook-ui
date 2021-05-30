import { AppProps } from "next/dist/next-server/lib/router/router";
import Navbar from "../PageComponent/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="pt-28 md:pt-14 ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
