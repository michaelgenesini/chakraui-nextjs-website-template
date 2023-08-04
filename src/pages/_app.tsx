import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { extendTheme } from "@chakra-ui/react"

import "../style.css"
import Head from "next/head"

const colors = {
  brand: {
    black: "#4A4A4A",
    text: "#9A867E",
    textHover: "#64544e",
    red: "#B65A64",
    redHover: "#da7681",
  },
}

const fonts = {
  heading: `'Papyrus'`,
  body: `"ABeeZee", "Open Sans", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
}

const theme = extendTheme({ colors, fonts })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
