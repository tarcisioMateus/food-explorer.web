import { Container } from "./styles"

export function InputWrapper({ label, icon: Icon, className, ...rest }) {
  return (
    <Container className={ className }>
      { label && <label htmlFor={label}>{label}</label>}
      <div>
        { Icon && <Icon size={20}/>}
        <input id={label} {...rest}/>
      </div>
    </Container>
  )
}