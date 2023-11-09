import { Routes, Route, Navigate } from "react-router-dom"

import { Home }  from "../pages/Home"
import { Dish }  from "../pages/Dish"
import { Favorites } from "../pages/Favorites"
import { CurrentOrder } from "../pages/CurrentOrder"
import { OrdersHistory } from "../pages/OrdersHistory"

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/ordersHistory" element={<Home/>} />
      <Route path="/dish/:id" element={<Dish/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/currentOrder" element={<CurrentOrder/>} />
      <Route path="/" element={<OrdersHistory/>} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}