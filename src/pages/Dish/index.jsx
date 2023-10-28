import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
import { api } from '../../services'

import ReceiptSvg from '../../assets/receipt.svg'

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container, Content } from "./styles"

export function Dish({}) {
  const { user } = useAuth()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        const { name, price, ingredients, description, avatar } = response.data
        setName(name)
        setPrice(price)
        setIngredients(ingredients)
        setDescription(description)
        setAvatarFile(`${api.defaults.baseURL}/files/${avatar}`)
        
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("can't access this page right now, please try again later!")
          navigate('-1')
        }
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Nav/>
      <Content>
        <ButtonText 
          icon={PiCaretLeft} name='return'
          onClick={() => navigate('-1')}
        />

        <div>

          <img src={avatarFile} alt={`picture of a ${name}`} />

          <div>

            <h2>{name}</h2>
            <p>{description}</p>

            <div id='tags'>
              {
                ingredients.map( (name, index) => {
                  return (
                    <Tag name={name} key={index}/>
                  )
                })
              }
            </div>

            {
              ( [USER_ROLE.CUSTOMER].includes(user.role) ) &&
              <div>
                <Stepper
                  iconSize={27}
                  className='dish'
                />
                <Button
                  img={ReceiptSvg}
                  name={`buy ∙ R$ ${price}`}
                />
              </div>
            }
            {
              ( [USER_ROLE.ADMIN].includes(user.role) ) &&
              <Button
                name='Edit dish'
                className='edit-button'
                onClick={() => navigate(`/editDish/${params.id}`)}
              />
            }

          </div>

        </div>
      </Content>
      <Footer/>
    </Container>
  )
}