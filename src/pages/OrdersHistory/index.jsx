import { useState, useEffect } from "react"
import { api } from '../../services'

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { TableOrders } from '../../components/TableOrders'
import { Footer } from '../../components/Footer'

import { Container, Content } from "./styles"

export function OrdersHistory({}) {

  const [userOrders, setUserOrders] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/orders`, { withCredentials: true })
        const info = response.data
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
        <ButtonText 
          icon={PiCaretLeft} name='return'
          onClick={() => {
            navigate('-1')
          }}
        />

        <TableOrders orders={userOrders}/>
      </Content>
      <Footer/>
    </Container>
  )
}