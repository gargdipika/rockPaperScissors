import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  TopContainer,
  ItemContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  BottomContainer,
  ImageElement,
  ImageButton,
  Players,
  PlayAgain,
  RulesImage,
} from './styledComponent'

class Game extends Component {
  state = {
    score: 0,
    isPlay: true,
    resultOfGame: '',
    userChoiceImage: '',
    opponentChoiceImage: '',
  }

  findResult = (userChoice, opponentChoice) => {
    let result

    if (userChoice === opponentChoice) {
      result = 'IT IS DRAW'
    } else if (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      result = 'YOU LOSE'
    } else if (userChoice === 'PAPER' && opponentChoice === 'ROCK') {
      result = 'YOU WON'
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      result = 'YOU WON'
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      result = 'YOU LOSE'
    } else if (userChoice === 'ROCK' && opponentChoice === 'PAPER') {
      result = 'YOU LOSE'
    } else if (userChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      result = 'YOU WON'
    }

    return result
  }

  renderGameResult = () => {
    const {userChoiceImage, opponentChoiceImage, resultOfGame} = this.state

    console.log(resultOfGame)

    const onClickPlayAgain = () => {
      this.setState({
        isPlay: true,
        userChoiceImage: '',
        opponentChoiceImage: '',
      })
    }

    return (
      <ItemContainer direction="row" justifyContent="space-between" width={50}>
        <ScoreContainer bgColor="transparent">
          <Players fontSize={20}>YOU</Players>
          <ImageElement src={userChoiceImage} alt="your choice" />
        </ScoreContainer>
        <ScoreContainer bgColor="transparent">
          <Players fontSize={20}>OPPONENT</Players>
          <ImageElement src={opponentChoiceImage} alt="opponent choice" />
        </ScoreContainer>

        <ItemContainer
          direction="column"
          justifyContent="center"
          alignItem="center"
          width={50}
        >
          <Players fontSize={25}>{resultOfGame}</Players>
          <PlayAgain width={150} type="button" onClick={onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgain>
        </ItemContainer>
      </ItemContainer>
    )
  }

  render() {
    const {score, isPlay} = this.state
    const {choiceList} = this.props
    return (
      <GameContainer minHeight={100} bgColor="#223a5f">
        <TopContainer>
          <Heading>ROCK PAPER SCISSORS</Heading>
          <ScoreContainer bgColor="white">
            <ScoreHeading fontSize={18}>Score</ScoreHeading>
            <ScoreHeading fontSize={22}>{score}</ScoreHeading>
          </ScoreContainer>
        </TopContainer>
        {isPlay ? (
          <BottomContainer>
            <ItemContainer
              direction="row"
              alignItem="center"
              justifyContent="center"
              width={40}
            >
              {choiceList.map(eachChoice => {
                const onClickChoice = () => {
                  const randomNumber = Math.floor(Math.random() * 3)
                  const userChoice = eachChoice.id
                  const opponentChoice = choiceList[randomNumber].id
                  const result = this.findResult(userChoice, opponentChoice)

                  if (result === 'YOU WON') {
                    this.setState(prevState => ({score: prevState.score + 1}))
                  } else if (result === 'YOU LOSE') {
                    this.setState(prevState => ({score: prevState.score - 1}))
                  }
                  this.setState({
                    isPlay: false,
                    userChoiceImage: eachChoice.imageUrl,
                    opponentChoiceImage: choiceList[randomNumber].imageUrl,
                    resultOfGame: result,
                  })
                }

                return (
                  <ImageButton
                    data-testid={`${eachChoice.id.toLowerCase()}Button`}
                    onClick={onClickChoice}
                    key={eachChoice.id}
                  >
                    <ImageElement
                      src={eachChoice.imageUrl}
                      alt={eachChoice.id}
                    />
                  </ImageButton>
                )
              })}
            </ItemContainer>
          </BottomContainer>
        ) : (
          this.renderGameResult()
        )}
        <Popup
          modal
          trigger={
            <PlayAgain width={150} alignSelf="flex-end">
              RULES
            </PlayAgain>
          }
        >
          {close => (
            <>
              <GameContainer bgColor="white" minHeight={50}>
                <PlayAgain
                  alignSelf="flex-end"
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </PlayAgain>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </GameContainer>
            </>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
