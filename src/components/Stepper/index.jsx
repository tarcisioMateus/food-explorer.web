import { FiPlus, FiMinus } from 'react-icons/fi'

import { ButtonText } from "../ButtonText"

import { Container } from "./styles"

export function Stepper ({ iconSize=24, ...rest }) {
  return (
    <Container {...rest} >
      <ButtonText icon= {FiMinus} iconSize={iconSize}/>
      <span>{"01"}</span>
      <ButtonText icon= {FiPlus} iconSize={iconSize}/>
    </Container>
  )
}