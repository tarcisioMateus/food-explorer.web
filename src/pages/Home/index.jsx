import { useState, useEffect } from 'react'
import { api } from '../../services'
import { searchForDishes } from '../../utils/searchForDishes'

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

export function Home({ }) {
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)


  function handleHomeSearch(event) {
    const latestSearch = event.target.value
    setSearch(latestSearch)
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/categories', { withCredentials: true })
        const info = response.data
        setCategories( info )

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('unable to add new dish right now, try again later!')
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

    fetchCategories()
    continueSearchThatStartedOutOfHome()
  }, [])

  return (
    <Container>
      <Nav
        handleHomeSearch= {handleHomeSearch}
      />
      <div className='body-content'>

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

      </div>
    </Container>
  )
}