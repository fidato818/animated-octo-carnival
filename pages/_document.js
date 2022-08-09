import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
    return (
        <Html>
            <Head>

            </Head>
            <body>
                <Main />
                <NextScript />
                {/* <Script src="./js/jquery.min.js" strategy="lazyOnload" />
                <Script src="./js/bootstrap.min.js" strategy="lazyOnload" />
                <Script src="./js/slick.min.js" strategy="lazyOnload" />
                <Script src="./js/nouislider.min.js" strategy="lazyOnload" />
                <Script src="./js/jquery.zoom.min.js" strategy="lazyOnload" /> */}
                {/* <Script src="./js/main.js" strategy="lazyOnload" /> */}
            </body>
        </Html>
    );
}