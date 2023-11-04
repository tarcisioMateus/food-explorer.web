
import { Nav } from "../../components/Nav"
import { OrderDishCard } from "../../components/OrderDishCard"
import { Payment } from "../../components/Payment"
import { Footer } from "../../components/Footer"

import { Container, Content } from "./styles"

export function CurrentOrder ({}) {
  return (
    <Container>
      <Nav/>
      <Content>
        <main>
          <div className="order-info">

          </div>
          <Payment/>
        </main>
      </Content>
      <Footer/>
    </Container>
  )
}