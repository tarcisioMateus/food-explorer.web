import { useState } from "react"
import { useOrder } from '../../hooks/order'

import { Container } from "./styles"

export function OrderDishCard({id, name, amount, avatar, price, ...rest}) {
  const { removeDishFromCurrentOrder } = useOrder()

  const [spentOnDish, setSpentOnDish] = useState(Number(amount) * Number(price))
  const [removed, setRemoved] = useState(false)

  return (
    <Container data-removed={removed} {...rest}>
      <button
        className='open-dish'
        onClick={() => navigate(`/dish/${id}`)}
      >
      <img
        src={ avatar }
        alt={`image of ${name}`}
      />
      </button>

      <div>
        <h4> 
          {`${amount} X ${name}`} 
          <span>{`R$ ${spentOnDish}`}</span>
        </h4>
        <button
          className='remove'
          onClick={() => { 
            removeDishFromCurrentOrder ({dishId: id})
            setRemoved(true)
          }}
        >
          Delete
        </button>
      </div>
    </Container>
  )
}