import { CacheProvider, Global, css } from '@emotion/react'
import createEmotionCache from '@/lib/createEmotionCache'
import CustomTailwindCSS from './CustomTailwindCSS'
import { ProviderProps } from './types'

const StyledProvider = ({ children }: ProviderProps) => (
  <NoControlStyledProvider>{children}</NoControlStyledProvider>
)

export const NoControlStyledProvider = ({ children }: ProviderProps) => {
  const clientSideEmotionCache = createEmotionCache()

  return (
    <CacheProvider value={clientSideEmotionCache}>
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
