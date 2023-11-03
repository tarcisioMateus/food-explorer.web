import { useState } from "react"

import QrCode from "../../assets/qr_code.svg"
import Clock from "../../assets/clock.svg"
import CheckCircle from "../../assets/check_circle.svg"
import ForkKnife from "../../assets/fork_knife.svg"

import { SiPix } from "react-icons/si"
import { BsFillCreditCardFill } from "react-icons/bs"

import { ButtonText } from "../ButtonText"
import { CreditCardForm } from "../CreditCardForm"

import { Container } from "./styles"

export function Payment({}) {
  const [currentMethod, setCurrentMethod] = useState('PIX')

  return (
    <Container data-method={currentMethod}>

      <div className="method">
        <ButtonText 
          className='payment active'
          id='pix'
          name='Pix'
          icon={ SiPix }
          onClick={() => {
            document.getElementById('pix').classList.add('active')
            document.getElementById('card').classList.remove('active')
            setCurrentMethod('PIX')
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
            setCurrentMethod('CARD')
          }}
        />
      </div>

      <div className="info">
        <div
          className="pix"
        >
          <img
            src={QrCode}
          />
        </div>

        <div
          className="card"
          data-state=''
        >
          <CreditCardForm/>

          <div
            className="state"
          >
            <img
              className="waiting"
              src={Clock}
            />
            <h3 className="waiting">Waiting for payment at the cashier</h3>

            <img
              className="approved"
              src={CheckCircle}
            />
            <h3 className="approved">Payment accept!</h3>

            <img
              className="delivered"
              src={ForkKnife}
            />
            <h3 className="delivered">Order delivered!</h3>

          </div>

        </div>

      </div>
    </Container>
  )
}