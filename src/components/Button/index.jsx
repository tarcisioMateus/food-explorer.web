import { Container } from "./styles"

export function Button({ name, icon: Icon, ...rest }) {
  return (
    <Container {...rest} type="button">
      {Icon && <Icon size={20}/>}
      {name}
    </Container>
  )
}