import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
import { useOrder } from '../../hooks/order'
import { api } from '../../services' 

import HeartSvg from '../../assets/heart.svg'
import HeartFilledSvg from '../../assets/heart_filled.svg'
import PencilSvg from '../../assets/pencil.svg'

import { ButtonText } from "../ButtonText"
import { Stepper } from "../Stepper"
import { Button } from "../Button"

import { Container } from "./styles"

export function Card ({ id, price, name, description, img, favorite, search }) {
  const { user } = useAuth()
  const { updateCurrentOrder, getDesiredAmountOnCurrentOrder } = useOrder()

  const [avatar, setAvatar] = useState( img ? `${api.defaults.baseURL}/files/${img}` : null )
  const [favoriteOn, setFavoriteOn] = useState( favorite )
  const [amount, setAmount] = useState(1)

  const navigate = useNavigate()

  async function handleAddToFavorites() {
    try {
      await api.post(`/favorites/${id}`, { withCredentials: true })
      setFavoriteOn( true )
    } catch (error) {
      alert('something went wrong, please try again later!')
    }
  }
  async function handleRemoveFromFavorites() {
    try {
      await api.delete(`/favorites/${id}`, { withCredentials: true })
      setFavoriteOn( false )
    } catch (error) {
      alert('something went wrong, please try again later!')
    }
  }

  useEffect(()=> {
    getDesiredAmountOnCurrentOrder({dishId: id , setAmount})
  }, [])

  return (
    <Container >
      {
        ( [USER_ROLE.CUSTOMER].includes(user.role) && !search ) &&
        <ButtonText 
          className='heart'
          img={ favoriteOn ? HeartFilledSvg : HeartSvg }
          onClick={() => {
            favoriteOn ? handleRemoveFromFavorites() : handleAddToFavorites()
          }}
        /> 
      }
      {
        ( [USER_ROLE.ADMIN].includes(user.role) ) &&
        <ButtonText 
          className='pencil'
          img={PencilSvg}
          onClick={() => navigate(`/editDish/${id}`)}
        /> 
      }
      <button
        onClick={() => navigate(`/dish/${id}`)}
        className='img-button'
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
        ( [USER_ROLE.CUSTOMER].includes(user.role) && !search ) &&
        <div>
          <Stepper
            amount={amount}
            plus={() => setAmount( prev => prev + 1)}
            minus={() => {
              if (amount > 1) {
                setAmount( prev => prev - 1)
              }
            }}
          />
          <Button 
            className='card'
            name='add'
            onClick={() => updateCurrentOrder({ dishId: id, amount })}
          />
        </div>
      }
    </Container>
  )
}