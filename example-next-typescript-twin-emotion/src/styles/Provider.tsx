import { CacheProvider, css, Global } from '@emotion/react'
import createEmotionCache from '@/lib/createEmotionCache'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import CustomTailwindCSS from './CustomTailwindCSS'
import { ProviderProps } from './types'

const StyledProvider = ({ children }: ProviderProps) => (
  <NoControlStyledProvider>{children}</NoControlStyledProvider>
)

export const NoControlStyledProvider = ({ children }: ProviderProps) => {
  const clientSideEmotionCache = createEmotionCache()

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <BaseStyles />
      <Global
        styles={css`
          ${CustomTailwindCSS}
        `}
      />
      {children}
    </CacheProvider>
  )
}

export default StyledProvider
