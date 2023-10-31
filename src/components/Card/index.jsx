import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
import { api } from '../../services' 

import HeartSvg from '../../assets/heart.svg'
import PencilSvg from '../../assets/pencil.svg'

import { ButtonText } from "../ButtonText"
import { Stepper } from "../Stepper"
import { Button } from "../Button"

import { Container } from "./styles"

export function Card ({ id, price, name, description, img}) {
  const { user } = useAuth()

  const [avatar, setAvatar] = useState( img ? `${api.defaults.baseURL}/files/${img}` : null )

  const navigate = useNavigate()

  async function handleAddToFavorites() {
    try {
      await api.post(`/favorites/${id}`, { withCredentials: true })

    } catch (error) {
      alert('something went wrong, please try again later!')
    }
  }

  return (
    <Container >
      {
        ( [USER_ROLE.CUSTOMER].includes(user.role) ) &&
        <ButtonText 
          img={HeartSvg}
          onClick={handleAddToFavorites}
        /> 
      }
      {
        ( [USER_ROLE.ADMIN].includes(user.role) ) &&
        <ButtonText 
          img={PencilSvg}
          onClick={() => navigate(`/editDish/${id}`)}
        /> 
      }
      <button
        onClick={() => navigate(`/dish/${id}`)}
      >
        <img 
          src={ avatar }
          alt={`picture of ${name}`}
        />

        <h4>{name} <span>{">"}</span></h4>
        <p>{description}</p>
      </button>
      <p> <span>{'R$ '} </span>{price}</p>
      
      {
        ( [USER_ROLE.CUSTOMER].includes(user.role) ) &&
        <div>
          <Stepper/>
          <Button 
            className='card'
            name='add'
          />
        </div>
      }
    </Container>
  )
}