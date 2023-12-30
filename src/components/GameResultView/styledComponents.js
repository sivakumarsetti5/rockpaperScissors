import styled from 'styled-components'

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 500px;
  margin: auto;
  height: 200px;
`

export const ListItem = styled.li`
  max-width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ChoiceImage = styled.img`
  width: 100%;
`
export const Paragraph = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Bree Serif';
  margin: 5px;
`

export const PlayAgainBtn = styled.button`
  padding: 10px 15px;
  background-color: #ffffff;
  color: #223a5f;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-family: 'Bree Serif';
`
export const Container = styled.div`
  text-align: center;
`
