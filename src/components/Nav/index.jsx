import { useState } from 'react'

import { FiSearch ,FiLogOut } from 'react-icons/fi'

import MenuSvg from '../../assets/menu.svg'

import { ButtonText } from "../ButtonText"
import { Brand } from "../Brand"
import { InputWrapper } from '../InputWrapper'
import { ReceiptButton } from "../ReceiptButton"

import { Menu } from '../../pages/Menu'

import { Container } from "./styles"

export function Nav ({ }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Container>
      
      <div>
        <ButtonText
          img={ MenuSvg }
          onClick={() => setMenuIsOpen(true)}
        />
        <Brand className='nav'/>
        <InputWrapper
          placeholder='search for dishes or ingredients'
          icon={FiSearch}
        />
        <ReceiptButton/>
        <ButtonText
          icon={ FiLogOut }
          iconSize={32}
          />
        <Menu
          menuIsOpen={menuIsOpen}
          onCloseMenu={() => setMenuIsOpen(false)}
        />
      </div>
      
    </Container>
  )
}