import { FiPlus, FiX } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'

import { Container } from "./styles"

export function Item({ isNew=false, value }) {
  return (
    <Container 
      className={ isNew ? 'is-new' : '' }
    >
      <input
        readOnly={!isNew}
        value={value}
        placeholder={  isNew ? 'Add' : ''}
      />
      <ButtonText
        iconSize={16}
        icon={ isNew ? FiPlus : FiX }
      />
    </Container>
  )
}