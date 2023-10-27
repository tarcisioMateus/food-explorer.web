import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;


  >label {
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.LABEL };

    display: block;
    margin-bottom: .8rem;
  }

  >div {
    padding: 1.6rem 1.4rem;
    border-radius: 0.5rem;
    background-color: ${ ({theme}) => theme.COLORS.INPUT_AUTH_BG };

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 4.8rem;

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
      padding: 0;
      
      font-size: 1.6rem;
      line-height: 100%;
      font-weight: 400;
      color: ${ ({theme}) => theme.COLORS.INPUT_T };

      &::placeholder {
        line-height: 100%;
        color: ${ ({theme}) => theme.COLORS.INPUT_T };
      }
      &:invalid {
        color: ${ ({theme}) => theme.COLORS.BUTTON_ADMIN_BG };
      }
    }

    &:focus-within,
    &:hover {
      outline: ${ ({theme}) => `2px solid ${theme.COLORS.INPUT_T}` };
    }
    &:has(input:invalid) {
      outline: ${ ({theme}) => `2px solid ${theme.COLORS.BUTTON_ADMIN_BG}` };
    }
  }

  &.admin {
    >label {
      margin-bottom: 1.6rem;
    }

    >div {
      border-radius: 0.8rem;
      background-color: ${ ({theme}) => theme.COLORS.INPUT_ADMIN_BG };
    }
  }
`