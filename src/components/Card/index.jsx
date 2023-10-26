import { useNavigate } from 'react-router-dom'
import HeartSvg from '../../assets/heart.svg'

import { ButtonText } from "../ButtonText"
import { Stepper } from "../Stepper"
import { Button } from "../Button"

import { Container } from "./styles"

export function Card ({ id, price, name, description, img}) {
  const navigate = useNavigate()

  return (
    <Container >
      <ButtonText img={HeartSvg}/>
      <button
        onClick={() => navigate(`/dish/${id}`)}
      >
        <img 
          src={ img }
          alt={`picture of ${name}`}
        />

        <h4>{name} <span>{">"}</span></h4>
        <p>{description}</p>
      </button>
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