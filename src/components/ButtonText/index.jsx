import { Container } from "./styles"

export function ButtonText({ name, ...rest }) {
  return (
    <Container {...rest} type="button">
      {name}
    </Container>
  )
}