import { Container } from "./styles"

export function Select({ label, options, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{ label }</label>
      <select name={label} id={label} {...rest}>
        {
          options.map( (value, index) => {
            return (
              <option value={value} key={index}>{value}</option>
            )
          })
        }
      </select>
    </Container>
  )
}