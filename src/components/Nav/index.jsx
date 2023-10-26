import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import { FiSearch ,FiLogOut } from 'react-icons/fi'

import MenuSvg from '../../assets/menu.svg'

import { ButtonText } from "../ButtonText"
import { Brand } from "../Brand"
import { InputWrapper } from '../InputWrapper'
import { ReceiptButton } from "../ReceiptButton"
import { Button } from "../Button"

import { Menu } from '../../pages/Menu'

import { Container } from "./styles"

export function Nav ({ }) {
  const { signOut, user } = useAuth()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container data-role={ user.role }>
      
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
        {
          ( [USER_ROLE.CUSTOMER].includes(user.role) ) &&
          <ReceiptButton/>
        }
        {
          ( [USER_ROLE.ADMIN].includes(user.role) ) &&
          <Button
            className='new-dish'
            name='New dish'
            onClick={ () => navigate('/newDish')}
          />
        }
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