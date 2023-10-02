import { Container } from "./styles"

export function Button({ name, icon: Icon, img, ...rest }) {
  return (
    <Container {...rest} type="button">
      {img && 
        <img src={img} alt=''/>
      }
      {Icon && <Icon size={20}/>}
      {name}
    </Container>
  )
}