import type { AppProps } from 'next/app'
import StyledProvider from '@/styles/Provider'
import { GlobalStyles as BaseStyles } from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledProvider>
        <BaseStyles />
        <Component {...pageProps} />
      </StyledProvider>
    </>
  )
}

export default MyApp
