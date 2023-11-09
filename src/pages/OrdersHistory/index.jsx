import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from '../../services'

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { TableOrders } from '../../components/TableOrders'
import { OrderCard } from "../../components/OrderCard"
import { Footer } from '../../components/Footer'

import { Container, Content } from "./styles"

export function OrdersHistory({}) {

  const [userOrders, setUserOrders] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/orders`, { withCredentials: true })
        const info = response.data.reverse()
        setUserOrders(info)

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("can't access this page right now, please try again later!")
          navigate('-1')
        }
      }
    }
    
    fetchData()
  }, [])

  return (
    <Container>
      <Nav/>
      <Content>
        <div>

          <h2> Orders history</h2>
          <ButtonText 
            icon={PiCaretLeft} name='return'
            onClick={() => {
              navigate('-1')
            }}
          />
        </div>

        <TableOrders orders={userOrders}/>
        <div className="card-display">
          {
            userOrders.map( (order, index) => <OrderCard order={order} key={index}/>)
          }
        </div>
      </Content>
      <Footer/>
    </Container>
  )
}