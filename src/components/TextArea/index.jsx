import { Container } from "./styles"

export function TextArea({ label, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{ label }</label>
      <textarea
        name={label} id={label} {...rest}
      />
    </Container>
  )
}