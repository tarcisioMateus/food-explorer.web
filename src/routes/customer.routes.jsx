import { Routes, Route, Navigate } from "react-router-dom"

import { Home }  from "../pages/Home"
import { Dish }  from "../pages/Dish"
import { Favorites } from "../pages/Favorites"

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dish/:id" element={<Dish/>} />
      <Route path="/favorites" element={<Favorites/>} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}