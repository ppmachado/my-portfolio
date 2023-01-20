import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Head>
        <title>Web Developer - Paula Machado</title>
      </Head>
      <GlobalStyle />
    </ThemeProvider>
  )
}
