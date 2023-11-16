import { useState, useEffect } from 'react'
import { api } from '../../services'
import { searchForDishes } from '../../utils/searchForDishes'
import { useFavorite } from '../../hooks/favorite'
import { useAuth } from '../../hooks/auth'

import { PiMaskSadLight } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'

import { Container, NotFound } from './styles'

export function Home({ }) {
  const { signOut } = useAuth()

  const { fetchFavoritesId } = useFavorite()

  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])


  function handleHomeSearch(event) {
    const latestSearch = event.target.value
    setSearch(latestSearch)
  }

  useEffect(() => {
    searchForDishes({ search, setData })
  }, [search])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/categories', { withCredentials: true })
        const info = response.data
        setCategories( info )

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
    function continueSearchThatStartedOutOfHome() {

      const latestSearch = localStorage.getItem('@foodExplorer:search')
      if (latestSearch) {
        const inputSearch = document.getElementById('Search')
        inputSearch.value = latestSearch
        inputSearch.focus()
  
        setSearch(latestSearch)
        localStorage.removeItem('@foodExplorer:search')
      }
    }

    fetchFavoritesId()
    fetchCategories()
    continueSearchThatStartedOutOfHome()
  }, [])

  return (
    <Container data-search={(search.length === 0) ? false : true }>
      <Nav
        handleHomeSearch= {handleHomeSearch}
      />
      <div className='body-content'>

        { (data.length === 0 && search.length === 0)  &&
          <>
            <main>

              <Hero/>
              <div id='sections'>
                {
                  categories &&
                  categories.map( (category, index) => {
                    const key = Object.keys(category)[0]

                    if (category[key].length) {
                      return (
                        <Section
                          key={index}
                          name={key}
                          data={category[key]}
                        />
                      )
                    }
                  })
                }
              </div>
            </main>

            <Footer/>
          </>
        }

      </div>


      { (search.length > 0) &&
        <>
          <div className='results'>
            { (data.length > 0) &&
              <Section
                name={'results'}
                data={data}
                search
              />
            }

            { (data.length == 0) &&
              <NotFound>
                <PiMaskSadLight/>
                <h3>Nothing found</h3>
              </NotFound>
            }

          </div>
            
          <Footer/>
        </>   
      }
    </Container>
  )
}