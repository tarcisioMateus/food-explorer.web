import { Card } from '../Card'

import { Container } from "./styles"

export function Section({name, data, ...rest}) {
  return (
    <Container {...rest}>
      <h3>{name}</h3>
      <div>
        {
          data.map(item => {
            return (
              <Card 
                key={item.id}
                price={item.price} 
                name={item.name} 
                img={item.img}
              />
            )
          })
        }
      </div>
    </Container>
  )
}