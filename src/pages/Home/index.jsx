import { useState, useEffect } from 'react'
import { api } from '../../services'

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

export function Home({ }) {
  const [categories, setCategories] = useState([])


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

    fetchCategories()
  }, [])

  return (
    <Container>
      <Nav/>
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