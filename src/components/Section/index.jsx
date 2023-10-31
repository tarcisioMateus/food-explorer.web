import { Card } from '../Card'

import { Container } from "./styles"

export function Section({name, data, favoritesId, ...rest}) {
  return (
    <Container {...rest}>
      <h3>{name}</h3>

      <div className='scroll'>
        <div>
          {
            data.map(item => {
              return (
                <Card 
                  key={item.id}
                  id={item.id}
                  price={item.price} 
                  name={item.name} 
                  description={item.description}
                  img={item.avatar}
                  favorite={ favoritesId.includes(item.id) ? true : false}
                />
              )
            })
          }
        </div>
      </div>
      
    </Container>
  )
}