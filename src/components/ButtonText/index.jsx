import { Container } from "./styles"

export function ButtonText({ name, icon: Icon, iconSize=24, img, ...rest }) {
  return (
    <Container {...rest} type="button">
      {Icon && <Icon size={iconSize}/>}
      {name && name}
      {img && 
        <img src = {img}/>
      }
    </Container>
  )
}