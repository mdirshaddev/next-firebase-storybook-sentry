import "styles/globals.css";

import type { AppProps } from "next/app";

export default function RootApp(props: AppProps) {
  const { Component, ...pageProps } = props;
  return <Component {...pageProps} />;
}
