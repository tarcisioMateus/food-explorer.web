import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services' 
import { useAuth } from '../../hooks/auth'


import { Container } from './styles'

export function FavoriteCard ({ name, img, id}) {
  const { signOut } = useAuth()

  const [avatar, setAvatar] = useState( img ? `${api.defaults.baseURL}/files/${img}` : null )
  const [removed, setRemoved] = useState(false)

  const navigate = useNavigate()

  async function handleRemoveFromFavorites() {
    const isOkay = confirm(`Are you sure that you wanna remove ${name} from your favorites ?`)

    if (isOkay) {
      try {
        await api.delete(`/favorites/${id}`, { withCredentials: true })
        setRemoved(true)
      } catch (error) {
        if (error.response?.status === 401) {
          signOut()
        } else {
          alert('something went wrong, please try again later!')
        }
      }
    }
  }

  return (
    <Container data-removed={removed}>
      <button
        className='open-dish'
        onClick={() => navigate(`/dish/${id}`)}
      >
      <img
        src={ avatar }
        alt={`image of ${name}`}
      />
      </button>

      <div>
        <h4> { name } </h4>
        <button
          className='remove'
          onClick={handleRemoveFromFavorites}

        >
          Remove from Favorites
        </button>
      </div>
    </Container>
  )
}