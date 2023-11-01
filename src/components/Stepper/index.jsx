import { FiPlus, FiMinus } from 'react-icons/fi'

import { ButtonText } from "../ButtonText"

import { Container } from "./styles"

export function Stepper ({ iconSize=24, amount, plus, minus, ...rest }) {
  return (
    <Container {...rest} >
      <ButtonText icon= {FiMinus} iconSize={iconSize}
        onClick={minus}
      />
      <span>{String(amount).padStart(2, '0')}</span>
      <ButtonText icon= {FiPlus} iconSize={iconSize}
        onClick={plus}
      />
    </Container>
  )
}