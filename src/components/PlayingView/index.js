import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  OuterContainer,
  InnerContainer,
  ModalContainer,
  RulesImage,
  CloseBtnContainer,
  CloseBtn,
  RulesTriggerBtn,
  RulesContainer,
} from './styledComponents'
import Header from '../Header'
import ViewGame from '../ViewGame'
import GameResultsView from '../GameResultView'

class PlayingView extends Component {
  state = {
    score: 0,
    playerChoice: '',
    opponentChoice: '',
    isGameOver: false,
    result: '',
  }

  onSelectChoice = id => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)
    const playerChoice = id
    const opponentChoice = choicesList[index].id
    let {score} = this.state
    let result = ''
    if (playerChoice === opponentChoice) {
      result = 'IT IS DRAW'
    } else if (
      (playerChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS')
    ) {
      result = 'YOU WON'
      score += 1
    } else {
      result = 'YOU LOSE'
      score -= 1
    }

    this.setState({
      playerChoice,
      opponentChoice,
      isGameOver: true,
      result,
      score,
    })
  }

  onClickPlayAgainBtn = () => {
    this.setState({isGameOver: false})
  }

  render() {
    const {score, playerChoice, opponentChoice, isGameOver, result} = this.state
    const {choicesList} = this.props
    return (
      <OuterContainer>
        <InnerContainer>
          <Header score={score} />
          {isGameOver ? (
            <GameResultsView
              choicesList={choicesList}
              playerChoice={playerChoice}
              opponentChoice={opponentChoice}
              playAgain={this.onClickPlayAgainBtn}
              result={result}
            />
          ) : (
            <ViewGame
              choicesList={choicesList}
              selectChoice={this.onSelectChoice}
            />
          )}
        </InnerContainer>
        <RulesContainer>
          <Popup
            modal
            trigger={<RulesTriggerBtn>Rules</RulesTriggerBtn>}
            position="center center"
          >
            {close => (
              <ModalContainer>
                <CloseBtnContainer>
                  <CloseBtn onClick={close}>
                    <RiCloseLine />
                  </CloseBtn>
                </CloseBtnContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModalContainer>
            )}
          </Popup>
        </RulesContainer>
      </OuterContainer>
    )
  }
}

export default PlayingView
