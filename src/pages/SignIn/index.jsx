import { useNavigate } from 'react-router-dom'

import { Brand } from '../../components/Brand'
import { InputWrapper } from "../../components/InputWrapper"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form } from "./styles"

export function SignIn({}) {
  const navigate = useNavigate()

  return (
    <Container>
      <main>
        <Brand/>
        <Form>
          <h2>Log in</h2>
          <InputWrapper
            label='Email'
            type='email'
            placeholder='example: example@example.com'
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
          />

          <InputWrapper
            label='Password'
            type='password'
            placeholder='at least 6 characters'
            pattern=".{6,18}"
            required
          />

          <Button
            type='submit'
            name='Sign In'
          />

          <ButtonText
            name='Create an account'
            onClick= {() => navigate('/signUp')}
          />
        </Form>
      </main>
    </Container>
  )
}