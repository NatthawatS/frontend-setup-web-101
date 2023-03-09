import type { AppProps } from 'next/app'
import StyledProvider from '@/styles/Provider'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import Layout from '@/components/common/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledProvider>
      <BaseStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledProvider>
  )
}

export default MyApp
