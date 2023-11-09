import { OrderStatus } from "../OrderStatus"

import { Container } from "./styles"

export function CustomerOrderState({ status }) {
  return (
    <Container>
      <OrderStatus status={status}/>
      <p>{ status }</p>
    </Container>
  )
}