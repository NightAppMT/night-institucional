import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/themes";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>Ex.Digital</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
