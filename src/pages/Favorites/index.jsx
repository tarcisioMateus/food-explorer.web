import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services'
import { useAuth } from '../../hooks/auth'

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { FavoriteCard } from '../../components/FavoriteCard'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export function Favorites () {
  const { signOut } = useAuth()

  const [data, setData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFavoritesData() {
      try {
        const response = await api.get('/favoritesDishes/data', { withCredentials: true })
        const info = response.data
        setData( info )
    
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

    fetchFavoritesData()
  }, [])

  return (
    <Container>
      <Nav/>

      <Content>

        <main>

          <div>
            <h2>Favorites</h2>
            <ButtonText
              icon={PiCaretLeft}
              name='Return'
              onClick={() => {
                navigate('-1')
              }}
            />
          </div>
          
          <div>
            {
              data.length && 
              data.map ( info => {
                return (
                  <FavoriteCard
                    key={info.id}
                    id={info.id}
                    name={info.name}
                    img={info.avatar}
                  />
                )
              } )
            }
          </div>
        </main>

      </Content>

      <Footer/>
    </Container>
  )
}