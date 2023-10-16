import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  height: 100vh;
  min-width: min-content;
  display: grid;
  grid-template-areas: "nav" "content-scroll" "footer";
  grid-template-rows: min-content auto min-content;

  >main {
    grid-area: content-scroll;
    overflow-y: auto;
    padding: 1rem 3.2rem 5.3rem;

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

  @media only screen and (${DEVICES.sm}) {
    >main {
      width: var(--main-width);
      margin: 0 auto;
      padding: clamp(2.4rem, 4vw, 4rem) 0.2rem clamp(5.3rem, 9vw , 10.6rem);

      >button:first-of-type {
        font-size: 2.4rem;
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  .first,
  .second {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    width: 100%;
  }

  #items {
    width: 100%;

    >label {
      font-size: 1.6rem;
      line-height: 100%;
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

  #buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    width: 100%;
  }

  @media only screen and (${DEVICES.md}) {
    .first {
      flex-direction: row;
      
      >div:first-of-type {
        max-width: fit-content;
      }
    }

    .second {
      flex-direction: row;
      align-items: baseline;

      >div:last-of-type {
        max-width: fit-content;
      }
    }

    #buttons {
      justify-content: flex-end;


      >button {
        max-width: fit-content;
        padding: 1rem 2rem;
        align-self: flex-end;
      }
    }
    
  }
`
