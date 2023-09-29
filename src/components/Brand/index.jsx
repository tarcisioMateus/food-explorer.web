import BrandSvg from '../../assets/brand.svg'

import { Container } from "./styles"

export function Brand() {
  return (
    <Container>
      <img
        src = {BrandSvg}
        alt='light blue hexagon'
      />
      <h1>food explorer</h1>
    </Container>
  )
}