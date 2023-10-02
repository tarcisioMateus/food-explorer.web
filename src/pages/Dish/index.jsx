import ReceiptSvg from '../../assets/receipt.svg'

import { PiCaretLeft } from 'react-icons/pi'

import { Nav } from '../../components/Nav'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container, Content } from "./styles"

export function Dish({img, name, description, price, tags}) {
  return (
    <Container>
      <Nav/>
      <Content>
        <ButtonText 
          icon={PiCaretLeft} name='return'
        />
        <img src={img} alt={`picture of a ${name}`} />
        <h2>{name}</h2>
        <p>{description}</p>
        <div id='tags'>
          {
            tags.map( (name, index) => {
              return (
                <Tag name={name} key={index}/>
              )
            })
          }
        </div>
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
      </Content>
      <Footer/>
    </Container>
  )
}