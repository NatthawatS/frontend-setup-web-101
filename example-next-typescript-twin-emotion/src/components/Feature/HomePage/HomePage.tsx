import { StyledInput, TextColor } from './styles'

const HomePage = () => {
  return (
    <div>
      <div>
        <div tw="bg-amber-600">test</div>
        <div tw="bg-slate-500">ssss</div>
        <StyledInput hasBorder>asdf</StyledInput>
        <div css={TextColor}>sdfsdf</div>
      </div>
    </div>
  )
}

export default HomePage
