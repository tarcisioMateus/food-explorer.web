import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { FiSearch ,FiLogOut } from 'react-icons/fi'

import MenuSvg from '../../assets/menu.svg'

import { ButtonText } from "../ButtonText"
import { Brand } from "../Brand"
import { InputWrapper } from '../InputWrapper'
import { ReceiptButton } from "../ReceiptButton"

import { Menu } from '../../pages/Menu'

import { Container } from "./styles"

export function Nav ({ }) {
  const { signOut } = useAuth()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

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
          onClick={handleSignOut}
          />
        <Menu
          menuIsOpen={menuIsOpen}
          onCloseMenu={() => setMenuIsOpen(false)}
          onSignOut={ handleSignOut }
        />
      </div>
      
    </Container>
  )
}