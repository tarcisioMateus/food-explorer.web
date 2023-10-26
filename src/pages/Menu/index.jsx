import { useNavigate } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/auth'

import { FiX, FiSearch } from 'react-icons/fi'

import { ButtonText } from "../../components/ButtonText"
import { InputWrapper } from "../../components/InputWrapper"
import { Footer } from "../../components/Footer"

import { Container, Form } from "./styles"

export function Menu ({ menuIsOpen, onCloseMenu, onSignOut }) {
  const { user } = useAuth()

  const navigate = useNavigate()


  return (
    <Container id='menu' data-menu-is-open={menuIsOpen}>

      <div>
        <ButtonText 
          icon={ FiX } 
          onClick={onCloseMenu}
        />
        <h3>Menu</h3>
      </div>

      <Form>
        <InputWrapper
          placeholder='search for dishes or ingredients'
          icon={FiSearch}
        />

        {
          ( user && [USER_ROLE.ADMIN].includes(user.role) ) &&
          <ButtonText
            className='menu'
            name='New dish'
            onClick={() => navigate('/newDish')}
          />
        }

        <ButtonText
          className='menu'
          name='Log out'
          onClick={onSignOut}
        />
      </Form>

      <Footer/>

    </Container>
  )
}