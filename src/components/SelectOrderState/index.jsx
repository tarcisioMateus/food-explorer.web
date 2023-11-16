import { useState, useEffect } from "react"
import { ORDER_STATE } from "../../utils/states"
import { api } from '../../services'
import { useAuth } from '../../hooks/auth'

import { OrderStatus } from "../OrderStatus"

import { Container } from "./styles"

export function SelectOrderState({  status, id }) {
  const { signOut } = useAuth()

  const [currentStatus, setCurrentStatus] = useState(status)


  useEffect(() => {
    async function updateOrder() {
      try {
        await api.put(`/orders/admin`, {id, state: currentStatus}, { withCredentials: true })
  
      } catch (error) {
        if (error.response?.status === 401) {
          signOut()
        } else if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("something went wrong, please try again later!")
        }
      }
    }
    updateOrder()
  }, [currentStatus])

  return (
    <Container className="select-order-state">
      
      <OrderStatus status={currentStatus}/>
      <select
        
        value={currentStatus}
        onChange={ (e) => setCurrentStatus(e.target.value)}
      >
        {
          [ORDER_STATE.PENDING].includes(currentStatus) &&
          <>
            <option value={ORDER_STATE.PENDING}> {ORDER_STATE.PENDING} </option>
            <option value={ORDER_STATE.PREPARING}> {ORDER_STATE.PREPARING} </option>
          </>
        }
        {
          [ORDER_STATE.PREPARING].includes(currentStatus) &&
          <>
            <option value={ORDER_STATE.PREPARING}> {ORDER_STATE.PREPARING} </option>
            <option value={ORDER_STATE.DELIVERED}> {ORDER_STATE.DELIVERED} </option>
          </>
        }
        {
          [ORDER_STATE.DELIVERED].includes(currentStatus) &&
          <option value={ORDER_STATE.DELIVERED}> {ORDER_STATE.DELIVERED} </option>
        }
      </select>
    </Container>
  )
}