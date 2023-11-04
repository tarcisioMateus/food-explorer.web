import { createContext, useContext, useState, useEffect } from 'react'

const OrderContext = createContext({})

function OrderProvider( { children } ) {
  const [currentOrder, setCurrentOrder] = useState({})
  const [amountInBasket, setAmountInBasket] = useState(0)


  function updateCurrentOrder ({dishId, amount}) {
    updateAmountInBasket ({previousOrder: currentOrder, dishId, amount})

    const  newOrder = currentOrder
    newOrder[String(dishId)] = String(amount)

    setCurrentOrder(newOrder)
    localStorage.setItem('@foodExplorer:currentOrder', JSON.stringify(newOrder))
  }
  function updateAmountInBasket ({ previousOrder, dishId, amount}) {
    let currentAmount = amountInBasket

    if (previousOrder.hasOwnProperty(dishId)) {
      const previousDishAmount = previousOrder[String(dishId)]
      currentAmount -= Number(previousDishAmount)
    }
    currentAmount += Number(amount)
    setAmountInBasket( currentAmount)
    localStorage.setItem('@foodExplorer:amountInBasket', JSON.stringify(currentAmount))
  }
  function removeDishFromCurrentOrder ({dishId}) {
    updateAmountInBasket ({previousOrder: currentOrder, dishId, amount: 0})

    const newOrder = currentOrder
    delete newOrder[String(dishId)]
    
    setCurrentOrder(newOrder)
    localStorage.setItem('@foodExplorer:currentOrder', JSON.stringify(newOrder))
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