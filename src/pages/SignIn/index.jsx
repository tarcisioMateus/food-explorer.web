import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Brand } from '../../components/Brand'
import { InputWrapper } from "../../components/InputWrapper"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form } from "./styles"

export function SignIn({}) {
  const { signIn } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignIn() {
    await signIn({ email, password })
    localStorage.setItem('@foodExplorer:order', JSON.stringify({}))
  }

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
            required
            onChange={ e => setEmail(e.target.value)}
          />

          <InputWrapper
            label='Password'
            type='password'
            placeholder='at least 6 characters'
            required
            onChange={ e => setPassword(e.target.value)}
          />

          <Button
            name='Sign In'
            onClick={handleSignIn}
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