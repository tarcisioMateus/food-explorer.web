import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;


  >label {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.LABEL };

    display: block;
    margin-bottom: 0.8rem;
  }

  >div {
    padding: 0 1.4rem;
    border-radius: 0.5rem;
    background-color: ${ ({theme}) => theme.COLORS.INPUT_AUTH_BG };

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    >svg {
      margin-right: 1.6rem;
      margin-left: 0.2rem;
      color: ${ ({theme}) => theme.COLORS.INPUT_ICON };
    }

    >input {
      background: none;
      border: none;
      outline: none;
      width: 100%;
      padding: 1.6rem 0;

      font-size: 1.6rem;
      font-weight: 400;
      color: ${ ({theme}) => theme.COLORS.INPUT_T };

      ::placeholder {
        color: ${ ({theme}) => theme.COLORS.INPUT_T };
      }
    }

    &:focus-within {
      outline: ${ ({theme}) => `2px solid ${theme.COLORS.INPUT_T}` };
    }
  }
`