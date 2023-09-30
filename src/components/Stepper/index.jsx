import { FiPlus, FiMinus } from 'react-icons/fi'

import { ButtonText } from "../ButtonText"

import { Container } from "./styles"

export function Stepper ({}) {
  return (
    <Container>
      <ButtonText icon= {FiMinus}/>
      <span>{"01"}</span>
      <ButtonText icon= {FiPlus}/>
    </Container>
  )
}