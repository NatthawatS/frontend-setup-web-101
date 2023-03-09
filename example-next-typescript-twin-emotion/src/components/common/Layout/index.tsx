import { styles } from '@/components/Feature/HomePage/styles'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return <div css={styles.content}>{children}</div>
}

export default Layout
