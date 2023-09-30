import HeartSvg from '../../assets/heart.svg'

import { ButtonText } from "../ButtonText"
import { Stepper } from "../Stepper"
import { Button } from "../Button"

import { Container } from "./styles"

export function Card ({price, name, img}) {
  return (
    <Container>
      <ButtonText img={HeartSvg}/>
      <img 
        src={ img }
        alt={`picture of ${name}`}
      />
      <h4>{name} <span>{" >"}</span></h4>
      <p> <span>{'R$'} </span>{price}</p>
      <Stepper/>
      <Button 
        className='card'
        name='add'
      />
    </Container>
  )
}