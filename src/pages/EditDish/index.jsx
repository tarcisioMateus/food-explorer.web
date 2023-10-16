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
  const ingredients = ['honey', 'grapes', 'milk', 'eggs', 'juice']

  return (
    <Container>
      <Nav/>
      <main>
        <ButtonText
          icon={PiCaretLeft} name='return'
        />
        <h2>Edit Dish</h2>

        <Form>

          <div className="first">
            <InputFile
              label='Image of the dish'
              inputText='Select image to replace it'
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
          
          <section id='buttons'>
            <Button
              name='Delete dish'
              className='admin-delete'
            />
            <Button
              type='submit'
              name='Save changes'
              className='admin-save'
            />
          </section>
        </Form>
        
      </main>
      <Footer/>
    </Container>
  )
}