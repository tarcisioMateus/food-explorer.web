import ReceiptSvg from '../../assets/receipt.svg'

import { Container } from "./styles"

export function ReceiptButton ({ amount = 0, ...rest}) {
  return (
    <Container type='button' {...rest}>
      <img
        src = { ReceiptSvg }
        alt = 'receipt svg'
      />
      <p>{`Ordered (${amount})`}</p>
      <div> {amount} </div>
    </Container>
  )
}