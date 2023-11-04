import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../hooks/order'

import ReceiptSvg from '../../assets/receipt.svg'

import { Container } from "./styles"

export function ReceiptButton ({ quantity = 0, ...rest}) {
  const { currentOrder } = useOrder()

  const [ amount, setAmount] = useState(quantity)

  const navigate = useNavigate()

  useEffect(() => {
    function updateAmount() {
      const newOrder = currentOrder

      let newAmount = 0
      for ( let key in newOrder) {
        if ( key === undefined ) {
          setAmount(0)
          return
        }
        newAmount += Number(newOrder[key])
        setAmount(newAmount)
      }
    }

    updateAmount()
  }, [currentOrder])

  return (
    <Container 
      type='button' {...rest}
      onClick={() => navigate('/currentOrder')}
    >
      <img
        src = { ReceiptSvg }
        alt = 'receipt svg'
      />
      <p>{`Ordered (${amount})`}</p>
      <div> {amount} </div>
    </Container>
  )
}