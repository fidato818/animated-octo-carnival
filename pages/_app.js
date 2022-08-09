// import '../styles/globals.css'

import "./css/bootstrap.min.css";
import "./css/slick.css";
import "./css/slick-theme.css";
import "./css/nouislider.min.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet" /> */}


      </Head>




      <Component {...pageProps} />

    </>
  );
}

export default MyApp
