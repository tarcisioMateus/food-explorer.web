import Img from '../../assets/hero.png'
import ImgSm from '../../assets/hero_sm.png'
import ImgMd from '../../assets/hero_md.png'
import ImgXl from '../../assets/hero_xl.png'
import { DEVICES } from "../../styles/responsiveX"

import { Container } from "./styles"

export function Hero({}) {
  return (
    <Container id='hero'>
      <div>

        <picture>
          <source media={`(${DEVICES.xl})`} srcSet={ ImgXl }/>
          <source media={`(${DEVICES.md})`} srcSet={ ImgMd }/>
          <source media={`(${DEVICES.sm})`} srcSet={ ImgSm }/>
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