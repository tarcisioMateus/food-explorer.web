import styled from "styled-components"

export const Container = styled.button`
  white-space: nowrap;
  
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-size: 1.4rem;
  line-height: 2.4rem;

  &:focus {
    outline: ${ ({theme}) => `1px solid ${theme.COLORS.BUTTON_T}` };
  }
  
  &.menu {
    font-size: 2.4rem;
    line-height: 140%;

    padding: 1rem;
    justify-content: flex-start;
    border-bottom: ${ ({theme}) => `1px solid ${theme.COLORS.MENU_BUTTON_LIST_BB}`};

  }

  &.payment {
    gap: .8rem;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    border-bottom: ${ ({theme}) => `1px solid ${theme.COLORS.ITEM_BG}`};

    &.active {
      background-color: ${ ({theme}) => theme.COLORS.INPUT_ADMIN_BG};
    }
  }
`