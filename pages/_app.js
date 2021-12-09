import { GlobalStyle } from "@styles/global";

function Application({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
