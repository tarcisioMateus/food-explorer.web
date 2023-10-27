import { FiUpload } from 'react-icons/fi'

import { Container } from "./styles"

export function InputFile({ label, inputText, ...rest }) {
  return (
    <Container>
      <label>{ label }</label>
      <label htmlFor={label}>
        <FiUpload size={24}/>
        { inputText }
        <input
          type="file" 
          name={label} id={label} className="sr-only"
          {...rest}
        />
      </label>
    </Container>
  )
}