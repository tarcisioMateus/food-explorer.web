import { createContext, useContext, useState, useEffect } from 'react'

const OrderContext = createContext({})

function OrderProvider( { children } ) {
  const [currentOrder, setCurrentOrder] = useState({})

  function updateCurrentOrder ({dishId, amount}) {
    const  newOrder = currentOrder
    newOrder[String(dishId)] = String(amount)
    setCurrentOrder(newOrder)
  }
  function removeDishFromCurrentOrder ({dishId}) {
    const newOrder = currentOrder
    delete newOrder[String(dishId)]
    setCurrentOrder(newOrder)
  }
  function getDesiredAmountOnCurrentOrder ({dishId, setAmount}) {
    if (currentOrder.hasOwnProperty(dishId)) {
      setAmount( Number(currentOrder[dishId]) )
    } else {
      setAmount(1)
    }
  }

  return (
    <OrderContext.Provider value={{ 
      currentOrder, 
      updateCurrentOrder, 
      removeDishFromCurrentOrder,
      getDesiredAmountOnCurrentOrder 
    }}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder () {
  const context = useContext(OrderContext)
  return context
}

export { OrderProvider, useOrder }