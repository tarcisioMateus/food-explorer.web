import MenuSvg from '../../assets/menu.svg'

import { ButtonText } from "../ButtonText"
import { Brand } from "../Brand"
import { ReceiptButton } from "../ReceiptButton"

import { Menu } from '../../pages/Menu'

import { Container } from "./styles"

export function Nav ({ }) {

  function slideInMenu() {
    document.getElementById('menu').style.setProperty('--x-position', "0%")
  }

  return (
    <Container>
      <ButtonText
        img={ MenuSvg }
        onClick={ slideInMenu }
      />
      <Brand className='nav'/>
      <ReceiptButton/>
      <Menu/>
    </Container>
  )
}