import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
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

export function EditDish({}) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")

  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

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

  async function updateDish({data, avatarFile}) {
    try {
      await api.put(`/dishes/admin/${params.id}`, data, { withCredentials: true })
      
      if (avatarFile) {
        const fileUpload = new FormData()
        fileUpload.append('avatar', avatarFile)
  
        await api.patch(`/dishes/admin/avatar/${params.id}`, fileUpload, { withCredentials: true })
      }
      alert('dish updated successfully!')
      navigate('-1')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to update dish right now, please try again later!')
      }
    }
  }
  async function handleUpdate() {
    if( !name || !price || !description || !category || !ingredients.length ) {
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
    await updateDish({data, avatarFile})
  }

  async function handleDelete() {
    const isOkay = confirm("are you sure that you want to delete it ?")
    
    if (isOkay) {
      try {
        await api.delete(`/dishes/admin/${params.id}`, { withCredentials: true })
        navigate('-1')
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('unable to delete right now, please try again later!')
        }
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        const { name, category, price, ingredients, description } = response.data
        setName(name)
        setCategory(category)
        setPrice(price)
        setIngredients(ingredients)
        setDescription(description)

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
      <main>
        <ButtonText
          icon={PiCaretLeft} name='return'
          onClick={() => navigate('-1')}
        />
        <h2>Edit Dish</h2>

        <Form>

          <div className="first">
            <InputFile
              label='Image of the dish'
              inputText='Select image'
              onChange={ event => handleUploadAvatarFile(event)}
            />
            <InputWrapper
              label='Name'
              placeholder='E.g. Strawberry Ice Cream'
              className='admin'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Select
              label='Category'
              options={['dinner', 'lunch', 'breakfast', 'dessert', 'vegetarian', 'barbecue', 'drink']}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
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
              placeholder='00,00'
              className='admin'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <TextArea
            label='Description'
            placeholder='Briefly talk about the dish, its ingredients and composition'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          
          <section id='buttons'>
            <Button
              name='Delete dish'
              className='admin-delete'
              onClick={ handleDelete }
            />
            <Button
              name='Save changes'
              className='admin-save'
              onClick={ handleUpdate }
            />
          </section>
        </Form>
        
      </main>
      <Footer/>
    </Container>
  )
}