import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  min-height: ${props => props.minHeight}vh;
  background-color: ${props => props.bgColor};
`
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid white 1px;
  border-radius: 5px;
  width: 80vw;
  opacity: 0.8;
  padding-left: 20px;
  margin-bottom: 70px;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItem};
  flex-wrap: wrap;
  width: ${props => props.width}vw;
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Bree Serif';
  font-size: 18px;
  width: 20px;
  font-weight: normal;
`

export const ScoreContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  border-radius: 10px;
`
export const ScoreHeading = styled.p`
  font-size: ${props => props.fontSize}px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-family: 'Roboto';
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ImageElement = styled.img`
  height: 150px;
  width: 150px;
`
export const ImageButton = styled.button`
  background-color: transparent;
  border: none;
`
export const Players = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
`
export const PlayAgain = styled.button`
  border: none;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  height: 36px;
  width: ${props => props.width}px;
  align-self: ${props => props.alignSelf};
  margin-bottom: 0;
  cursor: pointer;
`
export const RulesImage = styled.img`
  height: 400px;
  width: 400px;
`
