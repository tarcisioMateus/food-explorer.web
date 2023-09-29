import { Brand } from '../../components/Brand'
import { InputWrapper } from "../../components/InputWrapper"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form } from "./styles"

export function SignIn({}) {
  return (
    <Container>
      <main>
        <Brand/>
        <Form>
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
            name='create an account'
          />
        </Form>
      </main>
    </Container>
  )
}