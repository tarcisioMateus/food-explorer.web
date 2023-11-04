import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services'

const OrderContext = createContext({})

function OrderProvider( { children } ) {
  const [currentOrder, setCurrentOrder] = useState({})

  function updateCurrentOrder ({dishId, amount}) {
    setCurrentOrder( prev => prev[dishId] = amount)
  }
  function removeDishFromCurrentOrder ({dishId}) {
    setCurrentOrder( prev => delete prev[dishId])
  }

  return (
    <OrderContext.Provider value={{ currentOrder, updateCurrentOrder, removeDishFromCurrentOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder () {
  const context = useContext(OrderContext)
  return context
}

export { OrderProvider, useOrder }