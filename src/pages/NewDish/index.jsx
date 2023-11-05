import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services' 

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { InputFile } from '../../components/InputFile'
import { InputWrapper } from '../../components/InputWrapper'
import { Select } from '../../components/Select'
import { Item } from '../../components/Item'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container, Form } from "./styles"

export function NewDish({}) {
  const [ingredients, setIngredients] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")

  const [name, setName] = useState("")
  const [category, setCategory] = useState("dinner")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [avatarFile, setAvatarFile] = useState(null)


  const navigate = useNavigate()

  function handleAddIngredient() {
    if (!newIngredient) return
    setIngredients( prev => [ ...prev, newIngredient])
    setNewIngredient("")
  }
  function handleRemoveIngredient(deleted) {
    setIngredients( prev => prev.filter( ingredient => ingredient !== deleted))
  }

  function handleUploadAvatarFile(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
  }

  async function createNewDish({data, avatarFile}) {
    try {
      const response = await api.post('/dishes/admin', data, { withCredentials: true })
      const dish = response.data
      
      const fileUpload = new FormData()
      fileUpload.append('avatar', avatarFile)

      await api.patch(`/dishes/admin/avatar/${dish.id}`, fileUpload, { withCredentials: true })

      alert('new dish added successfully!')
      navigate('-1')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to add new dish right now, try again later!')
      }
    }
  }

  async function handleCreate() {
    if( !name || !price || !description || !category || !ingredients.length || !avatarFile) {
      return alert("fill in all fields!")
    }
    if (newIngredient) return alert('there is an ingredient, waiting to be added it!')

    const data = {
      name,
      price,
      description,
      category,
      ingredients
    }
    await createNewDish({data, avatarFile})
    
  }

  return (
    <Container>
      <Nav/>
      <main>
        <ButtonText
          icon={PiCaretLeft} name='return'
          onClick={ () => navigate('-1')}
        />
        <h2>New Dish</h2>

        <Form>

          <div className="first">
            <InputFile
              label='Image of the dish'
              inputText={ avatarFile ? 'Change image' : 'Select image'}
              onChange={ event => handleUploadAvatarFile(event)}
              required
            />
            <InputWrapper
              label='Name'
              placeholder='E.g. Strawberry Ice Cream'
              className='admin'
              value={name}
              onChange={ e => setName(e.target.value)} 
              required
            />
            <Select
              label='Category'
              options={['dinner', 'lunch', 'breakfast', 'dessert', 'vegetarian', 'barbecue', 'drink']}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="second">
            <section id='items'>
              <label>{'Ingredients'}</label>
              <div>
                { ingredients && 
                  ingredients.map( (ingredient, index) => {
                    return (
                      <Item
                        value={ingredient}
                        key={index}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    )
                  })
                }
                <Item 
                  isNew 
                  value={newIngredient}
                  onClick={handleAddIngredient} 
                  onChange={ e => setNewIngredient(e.target.value)}
                />
              </div>
            </section>

            <InputWrapper
              label='Price'
              placeholder='00.00'
              className='admin'
              value={price}
              onChange={ e => setPrice(e.target.value)} 
              required
            />
          </div>

          <TextArea
            label='Description'
            placeholder='Briefly talk about the dish, its ingredients and composition'
            value={description}
            onChange={ e => setDescription(e.target.value)} 
            required
          />
          <Button
            name='Save changes'
            className='admin-save'
            onClick={ handleCreate }
          />
        </Form>
        
      </main>
      <Footer/>
    </Container>
  )
}