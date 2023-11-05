import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOrder } from '../../hooks/order'

import { Container } from "./styles"

export function OrderDishCard({ data, ...rest }) {
  const { removeDishFromCurrentOrder } = useOrder()

  const [spentOnDish, setSpentOnDish] = useState(() =>{ 
    let spent = Number(data.amount) * Number(data.price.replace(',', '.'))
    if (!String(spent).includes('.')) {
      spent = String(spent)+'.00'
    }
    return ( spent )
  })
  const [removed, setRemoved] = useState(false)

  const navigate = useNavigate()

  return (
    <Container data-removed={removed} {...rest}>
      <button
        className='open-dish'
        onClick={() => navigate(`/dish/${data.id}`)}
      >
      <img
        src={ data.avatar }
        alt={`image of ${data.name}`}
      />
      </button>

      <div>
        <h4> 
          {`${data.amount} X ${data.name}`} 
          <span>{`R$ ${spentOnDish}`}</span>
        </h4>
        <button
          className='remove'
          onClick={() => { 
            removeDishFromCurrentOrder ({dishId: data.id, moneySaved: spentOnDish})
            setRemoved(true)
          }}
        >
          Delete
        </button>
      </div>
    </Container>
  )
}