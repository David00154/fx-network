import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme";
import { AppProps } from "next/app";
import { useEffect } from "react";
import SmoothScroll from "../components/SmoothScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // localStorage.setItem("chakra-ui-color-mode", "dark");
    // console.log(AOS)
    // AOS.init();
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
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <title>
          {pageProps.title ? pageProps.title + "  |" : ""} Fx Network
        </title>
        {/* <script defer dangerouslySetInnerHTML={{__html: `
        console.log(AOS)
          AOS.init();
        `}}>
        </script> */}
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        {/* <SmoothScroll> */}
        <div style={{ width: "100%" }}>
          <Component {...pageProps} />
        </div>
        {/* </SmoothScroll> */}
      </ChakraProvider>
      {/* <body defer dangerouslySetInnerHTML={{__html: `
        console.log(AOS)
          AOS.init();
        `}}>
        </body> */}
    </>
  );
}

export default MyApp;
