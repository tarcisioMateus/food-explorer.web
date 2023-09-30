import styled from "styled-components"

export const Container = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-size: 1.4rem;
  line-height: 2.4rem;

  &.menu {
    font-size: 2.4rem;
    line-height: 140%;

    padding: 1rem;
    justify-content: flex-start;
    border-bottom: ${ ({theme}) => `1px solid ${theme.COLORS.MENU_BUTTON_LIST_BB}`};

  }
`