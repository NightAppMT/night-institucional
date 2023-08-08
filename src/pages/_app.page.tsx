import { useEffect, useState } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/themes";
import Head from "next/head";
import Image from "next/image";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <>
      <Head>
        <title>Ex.Digital</title>
        <meta
          name="facebook-domain-verification"
          content="er1amkpxu8vlm8acpg6c48mywp8ypj"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
