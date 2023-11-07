import { useState } from 'react'
import { useOrder } from '../../hooks/order'
import { api } from '../../services'

import { Nav } from "../../components/Nav"
import { OrderDishCard } from "../../components/OrderDishCard"
import { Button } from '../../components/Button'
import { Payment } from "../../components/Payment"
import { Footer } from "../../components/Footer"

import { Container, Content } from "./styles"

export function CurrentOrder ({}) {
  const { currentOrderData, currentTotal, currentOrder } = useOrder()

  const [action, setAction] = useState('')

  async function submitCurrentOrder () {
    try {
      await api.post(`/orders`, {description: currentOrder}, { withCredentials: true })
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("something went wrong, please try again later!")
        navigate('-1')
      }
    }
  }

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
              onSubmit={submitCurrentOrder}
            />
          </div>
        </main>
      </Content>
      <Footer/>
    </Container>
  )
}