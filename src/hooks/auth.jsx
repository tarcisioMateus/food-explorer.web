import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services'

const AuthContext = createContext({})

function AuthProvider( { children } ) {
  const [user, setUser] = useState()

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        '/sessions', 
        { email, password }, 
        { withCredentials: true }
      )
      const { user } = response.data

      localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
      setUser( user )

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to sign in right now, please try again later!')
      }
    }
  }
  
  function signOut() {
    localStorage.removeItem('@foodExplorer:user')
    setUser()
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user')

    setUser(JSON.parse(user))
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth () {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }