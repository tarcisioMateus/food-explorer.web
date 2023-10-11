import { Nav } from '../../components/Nav'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { Card  } from '../../components/Card'


import { Container } from './styles'

export function Home({ }) {
  return (
    <Container>
      <Nav/>
      <div className='body-content'>

        <main>

          <Hero/>
          <div id='sections'>
            <Section 
              key={1}
              name='Diner'
              data={[{id:7, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'}, 
                {id:1, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:2, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:3, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:4, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:5, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:6, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'}
              ]}
            />

            <Section 
              key={2}
              name='Diner'
              data={[{id:4, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'}, 
                {id:1, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:2, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:3, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
              ]}
            />

            <Section 
              key={3}
              name='Diner'
              data={[{id:4, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'}, 
                {id:1, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:2, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
                {id:3, price:'18,00', name:'spagetty', img:'', description:'spaguetty pasta italy'},
              ]}
            />
          </div>
        </main>
        
        <Footer/>

      </div>
    </Container>
  )
}