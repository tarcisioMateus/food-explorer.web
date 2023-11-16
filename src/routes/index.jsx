import { useEffect } from "react"
import { api } from "../services"
import { BrowserRouter } from "react-router-dom"
import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/roles'

import { AdminRoutes } from "./admin.routes"
import { CustomerRoutes } from "./customer.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('users/validated', { withCredentials: true})
      .catch(error => {
        if (error.response?.status === 401) {
          signOut()
        }
      })
  }, [])

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>
      default:
        return <CustomerRoutes/>
    }
  }


  return (
    <BrowserRouter>
      {user ? <AccessRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}