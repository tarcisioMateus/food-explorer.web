import { Container } from "./styles"

export function InputWrapper({ label, icon: Icon, ...rest }) {
  return (
    <Container>
      { label && <label htmlFor={label}>{label}</label>}
      <div>
        { Icon && <Icon size={20}/>}
        <input id={label} {...rest}/>
      </div>
    </Container>
  )
}