import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services'

const OrderContext = createContext({})

function OrderProvider( { children } ) {
  const [currentOrder, setCurrentOrder] = useState({})
  const [amountInBasket, setAmountInBasket] = useState(0)
  const [currentOrderData, setCurrentOrderData] = useState({})
  const [currentTotal, setCurrentTotal] = useState(0)



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
  function removeDishFromCurrentOrder ({dishId, saved}) {
    updateAmountInBasket ({previousOrder: currentOrder, dishId, amount: 0})
    updateCurrentTotal ({price: saved.price, amount: Number( saved.amount * -1)})

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
  function updateCurrentTotal ({price, amount}) {
    let total = JSON.parse(localStorage.getItem('@foodExplorer:currentTotal'))

    total += (Number(amount) * Number(price))
    setCurrentTotal( total)
    localStorage.setItem('@foodExplorer:currentTotal', JSON.stringify(total))
  }


  async function fetchCurrentOrderData() {
    const currentOrderCopy = currentOrder
    localStorage.setItem('@foodExplorer:currentTotal', JSON.stringify(0))
    localStorage.setItem('@foodExplorer:currentOrderData', JSON.stringify({}))

    for (let dishId in currentOrderCopy) {
      try {
        const response = await api.get(`/dishes/${dishId}`)
        const { name, price, avatar } = response.data
        const amount = currentOrderCopy[String(dishId)]

        const updatedData = JSON.parse(localStorage.getItem('@foodExplorer:currentOrderData'))
        updatedData[String(dishId)] = {
          name, price, amount,
          id: dishId,
          avatar: `${api.defaults.baseURL}/files/${avatar}`
        }
        updateCurrentTotal ({price, amount})
        localStorage.setItem('@foodExplorer:currentOrderData', JSON.stringify(updatedData))
        setCurrentOrderData( updatedData )

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("can't access this page right now, please try again later!")
          navigate('-1')
        }
      }
    }
  }

  async function submitCurrentOrder () {
    try {
      await api.post(`/orders`, {description: currentOrder}, { withCredentials: true })
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("something went wrong, please try again later!")
        navigate('-1')
      }
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
      currentOrderData,
      currentTotal,
      updateCurrentOrder, 
      removeDishFromCurrentOrder,
      getDesiredAmountOnCurrentOrder,
      fetchCurrentOrderData,
      submitCurrentOrder,
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