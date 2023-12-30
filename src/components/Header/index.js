import {
  HeaderContainer,
  Paragraph,
  ScoreContainer,
  Heading,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <Heading>Rock Paper Scissors</Heading>
      <ScoreContainer>
        <Paragraph>Score</Paragraph>
        <Paragraph>{score}</Paragraph>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
