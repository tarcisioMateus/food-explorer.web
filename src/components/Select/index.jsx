import { Container } from "./styles"

export function Select({ label, options }) {
  return (
    <Container>
      <label htmlFor={label}>{ label }</label>
      <select name={label} id={label}>
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