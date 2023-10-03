import { Container } from "./styles"

export function InputFile({ label, icon: Icon, iconSize=24, inputText }) {
  return (
    <Container>
      <label>{ label }</label>
      <label htmlFor={label}>
        { Icon && <Icon size={ iconSize }/> }
        { inputText }
        <input type="file" name={label} id={label} className="sr-only"/>
      </label>
    </Container>
  )
}