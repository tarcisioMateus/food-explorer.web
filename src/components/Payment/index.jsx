
import { SiPix } from "react-icons/si"
import { BsFillCreditCardFill } from "react-icons/bs"

import { ButtonText } from "../ButtonText"
import { CreditCardForm } from "../CreditCardForm"

import { Container } from "./styles"

export function Payment({}) {


  return (
    <Container>

      <div className="method">
        <ButtonText 
          className='payment'
          id='pix'
          name='Pix'
          icon={ SiPix }
          onClick={() => {
            document.getElementById('pix').classList.add('active')
            document.getElementById('card').classList.remove('active')

          }}
        />
        <line/>
        <ButtonText
          className='payment'
          id='card'
          name='Credit Card'
          icon={ BsFillCreditCardFill }
          onClick={() => {
            document.getElementById('card').classList.add('active')
            document.getElementById('pix').classList.remove('active')

          }}
        />
      </div>

      <div className="info">
        <CreditCardForm/>
      </div>
    </Container>
  )
}