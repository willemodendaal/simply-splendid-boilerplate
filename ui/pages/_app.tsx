// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import React from "react";
import { StylesProvider } from '@material-ui/styles';

function MyApp({ Component, pageProps }: AppProps)    {
  // We use StylesProvider(injectFirst) to ensure that styled-components and material-ui play well together.
  return <StylesProvider injectFirst>
    <Component {...pageProps} />
  </StylesProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp