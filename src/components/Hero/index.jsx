import Img from '../../assets/hero.png'
import { Container } from "./styles"

export function Hero({}) {
  return (
    <Container id='hero'>
      <div>
        <img
          src={Img}
        />
        <div>
          <h2>Unmatched flavors</h2>
          <p>Feel the care of the preparation with selected ingredients.</p>
        </div>
      </div>
    </Container>
  )
}