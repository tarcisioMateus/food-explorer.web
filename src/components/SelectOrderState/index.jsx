import { useState } from "react"
import { ORDER_STATE } from "../../utils/states"

import { Container } from "./styles"

export function SelectOrderState({  status }) {
  const [currentStatus, setCurrentStatus] = useState(status)

  return (
    <Container
      data-state={currentStatus}
      value={status}
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
    </Container>
  )
}