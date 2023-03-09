import tw, { styled, theme, css as Css } from 'twin.macro'

export const styles = {
  content: () => [tw`bg-amber-300`],
}

export const StyledInput = styled.div(({ hasBorder }: { hasBorder: boolean }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
  tw`bg-slate-600`,
])

export const TextColor = Css`
  color: ${theme`colors.purple.500`};
`
