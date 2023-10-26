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
  const ingredients = ['honey', 'grapes', 'milk', 'eggs', 'juice']

  const navigate = useNavigate()

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
            />
            <Select
              label='Category'
              options={['Dessert', 'Dinner', 'Snack', 'Drink', 'Meal', 'Breakfast']}
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
                      />
                    )
                  })
                }
                <Item isNew />
              </div>
            </section>

            <InputWrapper
              label='Price'
              placeholder='R$ 00,00'
              className='admin'
            />
          </div>

          <TextArea
            label='Description'
            placeholder='Briefly talk about the dish, its ingredients and composition'
          />
          <Button
            type='submit'
            name='Save changes'
            className='admin-save'
          />
        </Form>
        
      </main>
      <Footer/>
    </Container>
  )
}