import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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


  const navigate = useNavigate()

  function handleAddIngredient() {
    if (!newIngredient) return
    setIngredients( prev => [ ...prev, newIngredient])
    setNewIngredient("")
  }
  function handleRemoveIngredient(deleted) {
    setIngredients( prev => prev.filter( ingredient => ingredient !== deleted))
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
              inputText='Select image'
            />
            <InputWrapper
              label='Name'
              placeholder='E.g. Strawberry Ice Cream'
              className='admin'
              value={name}
              onChange={ e => setName(e.target.value)} 
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
              placeholder='R$ 00,00'
              className='admin'
              value={price}
              onChange={ e => setPrice(e.target.value)} 
            />
          </div>

          <TextArea
            label='Description'
            placeholder='Briefly talk about the dish, its ingredients and composition'
            value={description}
            onChange={ e => setDescription(e.target.value)} 
          />
          <Button
            name='Save changes'
            className='admin-save'
            onClick={() =>
            console.log({name, price, description, category, ingredients})}
          />
        </Form>
        
      </main>
      <Footer/>
    </Container>
  )
}