import { createContext, useContext, useState, useEffect } from 'react'

const OrderContext = createContext({})

function OrderProvider( { children } ) {
  const [currentOrder, setCurrentOrder] = useState({})
  const [amountInBasket, setAmountInBasket] = useState(0)


  function updateCurrentOrder ({dishId, amount}) {
    updateAmountInBasket ({ dishId, amount})

    const  newOrder = currentOrder
    newOrder[String(dishId)] = String(amount)

    setCurrentOrder(newOrder)
    localStorage.setItem('@foodExplorer:currentOrder', JSON.stringify(newOrder))
    localStorage.setItem('@foodExplorer:amountInBasket', JSON.stringify(amountInBasket))
  }
  function updateAmountInBasket ({ dishId, amount}) {
    if (currentOrder.hasOwnProperty(dishId)) {
      const previousDishAmount = currentOrder[String(dishId)]
      setAmountInBasket( prev => prev - Number(previousDishAmount))
    }
    setAmountInBasket( prev => prev + Number(amount))
  }
  function removeDishFromCurrentOrder ({dishId}) {
    const newOrder = currentOrder
    const amountRemoved = newOrder[String(dishId)]
    setAmountInBasket( prev => prev - Number(amountRemoved))

    delete newOrder[String(dishId)]

    setCurrentOrder(newOrder)
    localStorage.setItem('@foodExplorer:currentOrder', JSON.stringify(newOrder))
    localStorage.setItem('@foodExplorer:amountInBasket', JSON.stringify(amountInBasket))
  }
  function getDesiredAmountOnCurrentOrder ({dishId, setAmount}) {
    if (currentOrder.hasOwnProperty(dishId)) {
      setAmount( Number(currentOrder[dishId]) )
    } else {
      setAmount(1)
    }
  }

  useEffect(() => {
    const currentOrder = localStorage.getItem('@foodExplorer:currentOrder')
    const amountInBasket = localStorage.getItem('@foodExplorer:amountInBasket')

    if (currentOrder && amountInBasket) {
      setCurrentOrder(JSON.parse(currentOrder))
      setAmountInBasket(JSON.parse(amountInBasket))
    }
  }, [])

  return (
    <OrderContext.Provider value={{ 
      currentOrder, 
      amountInBasket,
      updateCurrentOrder, 
      removeDishFromCurrentOrder,
      getDesiredAmountOnCurrentOrder,
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