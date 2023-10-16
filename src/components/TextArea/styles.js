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
    margin-bottom: 1.6rem;
  }

  >textarea {
    padding: 1.4rem;
    border-radius: 0.8rem;
    background-color: ${ ({theme}) => theme.COLORS.INPUT_ADMIN_BG };

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    color: ${ ({theme}) => theme.COLORS.INPUT_T };
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;

    &:focus,
    &:hover {
      outline: ${ ({theme}) => `2px solid ${theme.COLORS.INPUT_T}` };
    }
    
    height: 17.2rem;
    resize: none;

    &::-webkit-scrollbar-thumb {
      border: ${ ({theme}) => `2px solid ${theme.COLORS.INPUT_T}`};
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${ ({theme}) => theme.COLORS.INPUT_T};
    }
  }
`