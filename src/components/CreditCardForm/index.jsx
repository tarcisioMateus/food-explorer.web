import { useState } from "react"

import { InputWrapper } from "../InputWrapper"
import { Button } from "../Button"

import { Container } from "./styles"

export function CreditCardForm({disabled, onSubmit}) {
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cardCVC, setCardCVC] = useState('')

  return (
    <Container>

      <InputWrapper
        className='payment'
        label='Credit Card Number'
        placeholder='0000 0000 0000 0000'
        pattern=".{12,16}"
        value={cardNumber}
        onChange={(e) => {
          const input = e.target.value
          if ( /^[0-9]{0,16}$/.test(input) ) {
            setCardNumber(input)
          }
        }}
        required
      />

      <div>
        <InputWrapper
          className='payment'
          label='Expiration Date'
          placeholder='01/25'
          pattern=".{5}"
          value={cardExpiration}
          onChange={(e) => {
            const input = (e.target.value).replace('/','')
            if ( /^[0-9]{0,4}$/.test(input) ) {
              let output = input
                if ( input.length > 2) {
                output = [input.slice(0, 2), '/', input.slice(2)].join('')
              }
              setCardExpiration(output)
            }
          }}
          required
        />
        <InputWrapper
          className='payment'
          label='CVC'
          placeholder='000'
          pattern=".{3}"
          value={cardCVC}
          onChange={(e) => {
            const input = e.target.value
            if ( /^[0-9]{0,3}$/.test(input) ) {
              setCardCVC(input)
            }
          }}
          required
        />
      </div>

      <Button
        name='Proceed'
        disabled= {disabled}
        onClick={onSubmit}
      />

    </Container>
    )
  }