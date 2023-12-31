import styled from "styled-components"

export const Container = styled.button`
  white-space: nowrap;
  
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-radius: 0.5rem;
  padding: 1.2rem 0;

  line-height: 2.4rem;
  font-size: 1.4rem;

  &:focus {
    outline: ${ ({theme}) => `1px solid ${theme.COLORS.BUTTON_T}` };
  }

  &:disabled {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_DEL_ADMIN_BG };
    color: ${ ({theme}) => theme.COLORS.MENU_BUTTON_LIST_BB };
    transform: none;
    filter: none;
  }
    
  >svg {
    margin-right: 0.6rem;
  }

  &.card {
    padding: 0.4rem 0;
  }

  &.admin-save {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_ADMIN_BG};
  }
  &.admin-delete {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_DEL_ADMIN_BG};
  }
`