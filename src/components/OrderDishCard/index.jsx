import { useState } from "react"

import { Container } from "./styles"

export function OrderDishCard({id, name, amount, avatar, price, ...rest}) {
  const [spentOnDish, setSpentOnDish] = useState(Number(amount) * Number(price))
  const [validSpent, setValidSpent] = useState("spent-on-dish")
  const [removed, setRemoved] = useState(false)

  function removeFromOrder() {
    const order = JSON.parse( localStorage.getItem('@foodExplorer:order') )
    delete order[id]
    localStorage.setItem('@foodExplorer:order', JSON.stringify(order))

    setRemoved(true)
    setValidSpent('nothing-spent')
  }

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
          <span className={validSpent}>{`R$ ${spentOnDish}`}</span>
        </h4>
        <button
          className='remove'
          onClick={removeFromOrder}
        >
          Delete
        </button>
      </div>
    </Container>
  )
}