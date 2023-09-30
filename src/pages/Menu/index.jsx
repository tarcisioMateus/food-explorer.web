import { FiX, FiSearch } from 'react-icons/fi'

import { ButtonText } from "../../components/ButtonText"
import { InputWrapper } from "../../components/InputWrapper"
import { Footer } from "../../components/Footer"

import { Container, Form } from "./styles"

export function Menu ({}) {
  return (
    <Container>
      <div>

        <div>
          <ButtonText icon={ FiX }/>
          <h3>Menu</h3>
        </div>
        <Form>
          <InputWrapper
            placeholder='search for dishes or ingredients'
            icon={FiSearch}
          />
          <ButtonText
            className='menu'
            name='Log out'
          />
        </Form>
        <Footer/>
      </div>
    </Container>
  )
}