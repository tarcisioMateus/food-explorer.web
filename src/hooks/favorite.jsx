import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services'
import { useAuth } from '../hooks/auth'

const FavoriteContext = createContext({})

function FavoriteProvider( { children } ) {
  const { signOut } = useAuth()

  const [favoritesId, setFavoritesId] = useState([])

  async function fetchFavoritesId() {
    try {
      const response = await api.get('/favoritesDishes/id', { withCredentials: true })
      const info = response.data
      setFavoritesId( info )

    } catch (error) {
      if (error.response?.status === 401) {
        signOut()
      } else if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('something went wrong, please try again later!')
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('@foodExplorer:favoritesId', JSON.stringify(favoritesId))
  }, [favoritesId])

  useEffect(() => {
    const favorites = localStorage.getItem('@foodExplorer:favoritesId')
    if ( favorites ) {
      setFavoritesId(JSON.parse(favorites))
    }
  }, [])

  return (
    <FavoriteContext.Provider value={{ favoritesId, setFavoritesId, fetchFavoritesId }}>
      {children}
    </FavoriteContext.Provider>
  )
}

function useFavorite () {
  const context = useContext(FavoriteContext)
  return context
}

export { FavoriteProvider, useFavorite }