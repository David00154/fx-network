import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme";
import { AppProps } from "next/app";
import { useEffect } from "react";
import SmoothScroll from "../components/SmoothScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
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
  const getLayout = Component["getLayout"] ?? ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>
          {pageProps.title ? pageProps.title + "  |" : ""} Fx Network
        </title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <SmoothScroll>
          <Component {...pageProps} />
        </SmoothScroll>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
