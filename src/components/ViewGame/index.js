import {
  ChoiceImageButton,
  UnOrderedList,
  ListItem,
  ChoiceImage,
} from './styledComponents'

const ViewGame = props => {
  const {choicesList, selectChoice} = props

  const testId = id => {
    let result = '`'
    switch (id) {
      case 'ROCK':
        result = 'rockButton'
        break
      case 'PAPER':
        result = 'paperButton'
        break
      case 'SCISSORS':
        result = 'scissorsButton'
        break
      default:
        break
    }

    return result
  }

  return (
    <UnOrderedList>
      {choicesList.map(item => (
        <ListItem key={item.id}>
          <ChoiceImageButton
            type="button"
            data-testid={testId(item.id)}
            onClick={() => selectChoice(item.id)}
          >
            <ChoiceImage src={item.imageUrl} alt={item.id} />
          </ChoiceImageButton>
        </ListItem>
      ))}
    </UnOrderedList>
  )
}

export default ViewGame
