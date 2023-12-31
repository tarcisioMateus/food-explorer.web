import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from '../../services'
import { useAuth } from '../../hooks/auth'

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { TableOrders } from '../../components/TableOrders'
import { OrderCard } from "../../components/OrderCard"
import { Footer } from '../../components/Footer'

import { Container, Content } from "./styles"

export function Orders({}) {
  const { signOut } = useAuth()

  const [orders, setOrders] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/orders/admin`, { withCredentials: true })
        const info = response.data.reverse()
        setOrders(info)

      } catch (error) {
        if (error.response?.status === 401) {
          signOut()
        } else if (error.response) {
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

          <h2> Orders </h2>
          <ButtonText 
            icon={PiCaretLeft} name='return'
            onClick={() => {
              navigate('-1')
            }}
          />
        </div>

        <TableOrders orders={orders}/>
        <div className="card-display">
          {
            orders.map( (order, index) => <OrderCard order={order} key={index}/>)
          }
        </div>
      </Content>
      <Footer/>
    </Container>
  )
}