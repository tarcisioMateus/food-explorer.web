import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOrder } from '../../hooks/order'

import ReceiptSvg from '../../assets/receipt.svg'

import { Container } from "./styles"

export function ReceiptButton ({ ...rest}) {
  const { amountInBasket, fetchCurrentOrderData } = useOrder()

  const navigate = useNavigate()

  return (
    <Container 
      type='button' {...rest}
      disabled={ amountInBasket ? false : true}
      onClick={async() => {
        await fetchCurrentOrderData()
        navigate('/currentOrder')
      }}
    >
      <img
        src = { ReceiptSvg }
        alt = 'receipt svg'
      />
      <p>{`Ordered (${amountInBasket})`}</p>
      <div> {amountInBasket} </div>
    </Container>
  )
}