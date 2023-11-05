import { useOrder } from '../../hooks/order'

import { Nav } from "../../components/Nav"
import { OrderDishCard } from "../../components/OrderDishCard"
import { Payment } from "../../components/Payment"
import { Footer } from "../../components/Footer"

import { Container, Content } from "./styles"

export function CurrentOrder ({}) {
  const { currentOrderData, currentTotal } = useOrder()

  return (
    <Container>
      <Nav/>
      <Content>
        <main>
          <div className="order-info">
            {
              Object.keys(currentOrderData).length &&
              Object.keys(currentOrderData).map( dishId => {
                return (
                  <OrderDishCard
                    key={dishId}
                    data={currentOrderData[dishId]}
                  />
                )
              })
            }
            <h2>
              {currentTotal && 
                String(currentTotal).includes('.') ? String(currentTotal) : String(currentTotal)+'.00'
              }
            </h2>
          </div>
          <Payment/>
        </main>
      </Content>
      <Footer/>
    </Container>
  )
}