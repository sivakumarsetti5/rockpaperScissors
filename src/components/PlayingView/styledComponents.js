import styled from 'styled-components'

export const OuterContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export const InnerContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const RulesContainer = styled.div`
  text-align: right;
  padding: 10px;
`
export const ModalContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`
export const RulesTriggerBtn = styled.button`
  padding: 10px 15px;
  background-color: #ffffff;
  color: #223a5f;
  border: 0;
  border-radius: 10px;
`

export const RulesImage = styled.img`
  width: 90%;
`
export const CloseBtnContainer = styled.div`
  width: 100%;
  text-align: right;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
`
