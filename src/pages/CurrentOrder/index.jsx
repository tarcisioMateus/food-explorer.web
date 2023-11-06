import { useState } from 'react'
import { useOrder } from '../../hooks/order'

import { Nav } from "../../components/Nav"
import { OrderDishCard } from "../../components/OrderDishCard"
import { Button } from '../../components/Button'
import { Payment } from "../../components/Payment"
import { Footer } from "../../components/Footer"

import { Container, Content } from "./styles"

export function CurrentOrder ({}) {
  const { currentOrderData, currentTotal } = useOrder()

  const [action, setAction] = useState('')

  return (
    <Container>
      <Nav/>
      <Content data-action={action}>
        <main>
          <div className="order-info">
            <h2>Current order</h2>
            {
              Object.keys(currentOrderData).map( dishId => {
                return (
                  <OrderDishCard
                    key={dishId}
                    data={currentOrderData[dishId]}
                  />
                )
              })
            }
            <h3>
              {'Total: R$ '}
              {currentTotal && 
                String(currentTotal).includes('.') ? String(currentTotal) : String(currentTotal)+'.00'
              }
            </h3>
            <Button
              name='advance'
              disabled={ currentTotal ? false : true}
              onClick={() => setAction('payment')}
            />
          </div>

          <div className="payment">
            <h2>Payment</h2>
            <Payment
              disabled={ currentTotal ? false : true}
            />
          </div>
        </main>
      </Content>
      <Footer/>
    </Container>
  )
}