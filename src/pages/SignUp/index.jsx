import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services'

import { Brand } from '../../components/Brand'
import { InputWrapper } from "../../components/InputWrapper"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form } from "./styles"

export function SignUp({}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if( !name || !email || !password) return alert("fill in all fields!")

    api.post('/users', {name, email, password}).then(
      () => {
        alert('successfully registered user!')
        navigate('/')
      }
    ).catch( error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to create account')
      }
    })
  }

  return (
    <Container>
      <main>
        <Brand/>
        <Form>
          <h2>Create your account</h2>

          <InputWrapper
            label='Name'
            type='text'
            placeholder='example: Mary Jane'
            required
            onChange={ e => setName(e.target.value)}
          />

          <InputWrapper
            label='Email'
            type='email'
            placeholder='example: example@example.com'
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
            onChange={ e => setEmail(e.target.value)}
          />

          <InputWrapper
            label='Password'
            type='password'
            placeholder='at least 6 characters'
            pattern=".{6,18}"
            required
            onChange={ e => setPassword(e.target.value)}
          />

          <Button
            type='submit'
            name='Sign Up'
            onClick={handleSignUp}
          />

          <ButtonText
            name='Already have an account'
            onClick= { () => navigate('/')}
          />
        </Form>
      </main>
    </Container>
  )
}