import MenuSvg from '../../assets/menu.svg'

import { ButtonText } from "../ButtonText"
import { Brand } from "../Brand"
import { ReceiptButton } from "../ReceiptButton"

import { Container } from "./styles"

export function Nav ({ }) {
  return (
    <Container>
      <ButtonText
        img={ MenuSvg }
      />
      <Brand className='nav'/>
      <ReceiptButton/>
    </Container>
  )
}