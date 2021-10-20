import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme/theme.tsx";
import { AppProps } from "next/app";
import { useEffect } from "react";
import SmoothScroll from "../components/SmoothScroll";
import Script from "next/script"
import ProvideAuth from "../auth"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // localStorage.setItem("chakra-ui-color-mode", "dark");
    // console.log(AOS)
        // window.addEventListener("load", () => {
        //   AOS.init({
        //   duration: 1000,
        //   easing: 'ease-in',
        //   once: false,
        // })
        // })
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  // const getLayout = Component["getLayout"] ?? ((page) => page);
  return (
    <>
      <Head>
        <link
          href="/aos/aos.css"
          rel="stylesheet"
        />
        <link
          href="/custom.css"
          rel="stylesheet"
        />
        {/*<script src="/aos/aos.js" defer></script>*/}
        <title>
          {pageProps.title ? pageProps.title + "  |" : ""} Fx Network
        </title>
        {/* <script defer dangerouslySetInnerHTML={{__html: `
        console.log(AOS)
          AOS.init();
        `}}>
        </script> */}
      </Head>
      <ProvideAuth>
      <ChakraProvider resetCSS theme={theme}>
        {/* <SmoothScroll> */}
        <div style={{ width: "100%" }}>
          <Component {...pageProps} />
        </div>
        {/* </SmoothScroll> */}
      </ChakraProvider>
      </ProvideAuth>
      {/* <body defer dangerouslySetInnerHTML={{__html: `
        console.log(AOS)
          AOS.init();
        `}}>
        </body> */}
        <Script strategy="beforeInteractive" src="/aos/aos.js" async defer />
        <Script async defer>
        {`
          window.addEventListener("load", () => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in',
              })
              console.log("Mounted Aos")
                })
        `}
      </Script>
    </>
  );
}

export default MyApp;
