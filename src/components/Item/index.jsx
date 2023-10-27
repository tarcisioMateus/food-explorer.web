import { FiPlus, FiX } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'

import { Container } from "./styles"

export function Item({ isNew=false, value, onClick, ...rest }) {
  return (
    <Container 
      className={ isNew ? 'is-new' : '' }
      $length={ value ? value.length : 9 }
    >
      <input
        readOnly={!isNew}
        value={value}
        placeholder={  isNew ? 'Add' : ''}
        {...rest}
      />
      <ButtonText
        iconSize={16}
        icon={ isNew ? FiPlus : FiX }
        onClick = {onClick}
      />
    </Container>
  )
}