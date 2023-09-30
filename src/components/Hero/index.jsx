import Img from '../../../public/hero.png'
import { Container } from "./styles"

export function Hero({}) {
  return (
    <Container>
      <img
        src={Img}
      />
      <div>
        <h2>Unmatched flavors</h2>
        <p>Feel the care of the preparation with selected ingredients.</p>
      </div>
    </Container>
  )
}