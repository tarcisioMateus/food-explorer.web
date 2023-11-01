import { useNavigate } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { searchForDishes } from '../../utils/searchForDishes'

import { PiMaskSadLight } from 'react-icons/pi'
import { FiX, FiSearch } from 'react-icons/fi'

import { ButtonText } from "../../components/ButtonText"
import { InputWrapper } from "../../components/InputWrapper"
import { Section } from '../../components/Section'
import { Footer } from "../../components/Footer"

import { Container, Form, NotFound } from "./styles"

export function Menu ({ menuIsOpen, onCloseMenu, onSignOut }) {
  const { user } = useAuth()

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    searchForDishes({ search, setData })
  }, [search])

  return (
    <Container id='menu' data-menu-is-open={menuIsOpen}>

      <div>
        <ButtonText 
          icon={ FiX } 
          onClick={() => {
            onCloseMenu()
            setSearch('')
            setData([])
          }}
        />
        <h3>Menu</h3>
      </div>

      <Form>
        <InputWrapper
          placeholder='search for dishes or ingredients'
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        { (data.length === 0 && search.length === 0)  && 
        
          <>
            {
              ( user && [USER_ROLE.ADMIN].includes(user.role) ) &&
              <ButtonText
                className='menu'
                name='New dish'
                onClick={() => navigate('/newDish')}
              />
            }
            {
              ( user && [USER_ROLE.CUSTOMER].includes(user.role) ) &&
              <ButtonText
                className='menu'
                name='Favorites'
                onClick={() => navigate('/favorites')}
              />
            }

            <ButtonText
              className='menu'
              name='Log out'
              onClick={onSignOut}
            />
          </>

        }

        { (search.length > 0) &&
        
          <div className='results'>
            { (data.length > 0) &&
              <Section
                name={''}
                data={data}
                heart={false}
              />
            }

            { (data.length == 0) &&
              <NotFound>
                <PiMaskSadLight/>
                <h3>Nothing found</h3>
              </NotFound>
            }
          </div>
        }

      </Form>

      <Footer/>

    </Container>
  )
}