import type { AppProps } from 'next/app'
import Head from 'next/head'
import StyledProvider from '@/styles/Provider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledProvider>
        <Component {...pageProps} />
      </StyledProvider>
    </>
  )
}
