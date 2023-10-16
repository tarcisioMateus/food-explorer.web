import styled from "styled-components"

export const Container = styled.div`
  background-color: ${ ({theme}) => theme.COLORS.ITEM_BG };
  border-radius: 0.8rem;
  padding: .8rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 3.2rem;

  input {
    background: transparent;
    border: none;
    outline: none;
    max-width: ${ ({$length}) => `calc( 1.4rem * ${$length})` };
    
    padding: 0;
    margin: 0;

    font-size: 1.6rem;
    line-height: 100%;
    color: ${ ({theme}) => theme.COLORS.ITEM_T};
  }

  >button {
    max-width: min-content;
  }

  &:focus-within {
    outline: ${ ({theme}) => `2px solid ${theme.COLORS.ITEM_T}` };
  }

  &.is-new {
    background-color: transparent;
    border: ${ ({theme}) => `1.5px dashed ${theme.COLORS.ITEM_NEW_T__BD}`};
    gap: .8rem;

    input::placeholder {
      color: ${ ({theme}) => theme.COLORS.ITEM_NEW_T__BD};
    }
    >button svg {
      color: ${ ({theme}) => theme.COLORS.ITEM_NEW_T__BD};
    } 
    
  }
`