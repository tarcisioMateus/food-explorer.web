import { useState, useEffect } from "react"
import { useOrder } from '../../hooks/order'
import { ORDER_STATE } from "../../utils/states"
import { api } from "../../services"
import { useAuth } from '../../hooks/auth'

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
  const { signOut } = useAuth()
  const { currentTotal } = useOrder()

  const [currentMethod, setCurrentMethod] = useState('PIX')
  const [currentState, setCurrentState] = useState(ORDER_STATE.NONE)

  let intervalId
  async function fetchUpdatedOrderState() {

    intervalId = setInterval(async() => {

      try {
        const order_id = JSON.parse(localStorage.getItem('@foodExplorer:latestOrderId'))
        if (order_id) {
          const response = await api.get(`/orders/${order_id}`, { withCredentials: true })
          const updatedState = response.data.state
          setCurrentState(updatedState)
        }
      } catch (error) {
        if (error.response?.status === 401) {
          signOut()
        } else if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("can't access this page right now, please try again later!")
        }
        clearInterval(intervalId)
        navigate('-1')
      }

    }, 1000 * 30)
  }
  useEffect(() => {

    if ([ORDER_STATE.PENDING].includes(currentState)) {
      fetchUpdatedOrderState()
    }

    if ([ORDER_STATE.DELIVERED].includes(currentState)) {
      clearInterval(intervalId)
    }

  }, [currentState])

  return (
    <Container data-method={currentMethod} data-state={currentState}>

      <div className="method">
        <ButtonText 
          disabled={ currentTotal ? false : true}
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
        <div className="line"/>
        <ButtonText
          disabled={ currentTotal ? false : true}
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
          <CreditCardForm
            id='credit-card-form'
            updateState={() => setCurrentState(ORDER_STATE.PENDING)}
          />

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