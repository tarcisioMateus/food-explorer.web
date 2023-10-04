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

  return (
    <Container>
      <Nav/>
      <main>
        <ButtonText
          icon={PiCaretLeft} name='return'
        />
        <h2>New Dish</h2>

        <Form>
          <InputFile
            label='Image of the dish'
            inputText='Select Image'
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