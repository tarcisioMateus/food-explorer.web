import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/auth'

import { SelectOrderState } from "../SelectOrderState"
import { CustomerOrderState } from '../CustomerOrderState'

import { Container } from "./styles"

export function OrderCard({ order, ...rest }) {
  const { user } = useAuth()

  return (
    <Container {...rest}>
      <div>
        <p>{ String(order.id).padStart(8, '00000000') }</p>
        {
          ( user && [USER_ROLE.CUSTOMER].includes(user.role) ) &&
          <CustomerOrderState status={order.state}/>
        }
        <p>
        { 
          String(order.created_at).split(' ')[0].split('-')[2] + '/' + String(order.created_at).split(' ')[0].split('-')[1] 
          + ' at ' +
          String(order.created_at).split(' ')[1].split(':')[0] + 'h' + String(order.created_at).split(' ')[1].split(':')[1] 
        }
        </p>
      </div>

      <p>{ order.description }</p>
      {
        ( user && [USER_ROLE.ADMIN].includes(user.role) ) &&
        <SelectOrderState status={order.state} id={order.id}/>
      }
    </Container>
  )
}