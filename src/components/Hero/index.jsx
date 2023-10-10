import Img from '../../assets/hero.png'
import ImgSm from '../../assets/hero_sm.png'
import ImgMd from '../../assets/hero_md.png'
import ImgXl from '../../assets/hero_xl.png'
import { devices } from '../../utils/sizeX'

import { Container } from "./styles"

export function Hero({}) {
  return (
    <Container id='hero'>
      <div>

        <picture>
          <source media={`(${devices.xl})`} srcset={ ImgXl }/>
          <source media={`(${devices.md})`} srcset={ ImgMd }/>
          <source media={`(${devices.sm})`} srcset={ ImgSm }/>
          <img src={Img} alt='colorful macarons and berries in free fall'/>
        </picture>

        <div>
          <h2>Unmatched flavors</h2>
          <p>Feel the care of the preparation with selected ingredients.</p>
        </div>

      </div>
    </Container>
  )
}