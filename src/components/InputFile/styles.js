import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  >label:first-of-type {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.LABEL };

    display: block;
    margin-bottom: 1.6rem;
  }

  >label:last-of-type {
    padding: 1.2rem 3.2rem;
    border-radius: 0.8rem;
    background-color: ${ ({theme}) => theme.COLORS.INPUT_ADMIN_BG };

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    color: ${ ({theme}) => theme.COLORS.ICON_BUTTON };
    font-size: 1.4rem;
    list-style: 2.4rem;
    font-weight: 500;

    >svg {
      margin-right: 0.8rem;
      color: ${ ({theme}) => theme.COLORS.ICON_BUTTON };
    }

    &:focus-within,
    &:hover {
      outline: ${ ({theme}) => `2px solid ${theme.COLORS.INPUT_T}` };
    }
  }
`