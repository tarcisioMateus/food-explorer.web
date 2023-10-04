import styled from "styled-components"

export const Container = styled.div`
  width: 42.8rem;
  margin: auto;

  >main {
    margin: 1rem 3.2rem 5.3rem;

    >button:first-of-type {
      width: min-content;

      font-size: 1.65rem;
      line-height: 140%;
    }

    >h2 {
      font-size: 3.2rem;
      line-height: 140%;
      font-weight: 500;
      margin: 2.4rem 0;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  #items {
    width: 100%;

    >label {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${ ({theme}) => theme.COLORS.LABEL };

      display: block;
      margin-bottom: 1.6rem;
    }

    >div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.6rem;
      
      width: 100%;
      padding: .8rem;
      border-radius: 0.8rem;
      background-color: ${ ({theme}) => theme.COLORS.INPUT_ADMIN_BG };
    }
  }
`