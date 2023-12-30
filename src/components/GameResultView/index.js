import {
  ChoiceImage,
  ListItem,
  UnOrderedList,
  Paragraph,
  PlayAgainBtn,
  Container,
} from './styledComponents'

const GameResultView = props => {
  const {playerChoice, opponentChoice, choicesList, playAgain, result} = props

  const imageUrl = id => {
    const choice = choicesList.find(item => item.id === id)
    return choice.imageUrl
  }

  return (
    <Container>
      <UnOrderedList>
        <ListItem>
          <Paragraph>PLAYER</Paragraph>
          <ChoiceImage src={imageUrl(playerChoice)} alt="your choice" />
        </ListItem>
        <ListItem>
          <Paragraph>OPPONENT</Paragraph>
          <ChoiceImage src={imageUrl(opponentChoice)} alt="opponent choice" />
        </ListItem>
      </UnOrderedList>
      <Paragraph>{result}</Paragraph>
      <PlayAgainBtn type="button" onClick={playAgain}>
        Play Again
      </PlayAgainBtn>
    </Container>
  )
}

export default GameResultView
