import HeartSvg from '../../assets/heart.svg'

import { ButtonText } from "../ButtonText"
import { Stepper } from "../Stepper"
import { Button } from "../Button"

import { Container } from "./styles"

export function Card ({price, name, description, img}) {
  return (
    <Container>
      <ButtonText img={HeartSvg}/>
      <img 
        src={ img }
        alt={`picture of ${name}`}
      />

      <h4>{name} <span>{">"}</span></h4>
      <p>{description}</p>
      <p> <span>{'R$'} </span>{price}</p>
      
      <div>
        <Stepper/>
        <Button 
          className='card'
          name='add'
        />
      </div>
    </Container>
  )
}