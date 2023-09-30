import { Container } from "./styles"

export function ButtonText({ name, icon: Icon, img, ...rest }) {
  return (
    <Container {...rest} type="button">
      {name && name}
      {Icon && <Icon size={18}/>}
      {img && 
        <img src = {img}/>
      }
    </Container>
  )
}