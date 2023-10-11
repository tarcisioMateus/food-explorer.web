import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  
  height: 100vh;
  width: 100vw;

  >main {
    width: 90vw;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (${DEVICES.lg}) {
    >main {
      width: 100vw;
      display: grid;
      grid-template-columns: 5.7fr 4.3fr;

      .brand {
        width: 5.7vw;
        box-sizing: content-box;
        margin: auto;
        padding-top: calc( 40vh - 2.5rem);
        padding-right: calc( calc(57vw * .66) - 6.6rem);
        padding-bottom: calc( 60vh - 2.5rem);
        padding-left: calc( calc(57vw * .33) - 3.3rem);

        >h1 {
          white-space: nowrap;
        }
      }

      >form {
        background-color: ${ ({theme}) => theme.COLORS.NAV_BG};
        padding: clamp(.1rem, 10% + .1rem, 6.4rem);
        border-radius: 1.6rem;

        >h2 {
          display: block;
          font-size: 3.2rem;
          line-height: 140%;
          font-weight: 500;
          color: ${ ({theme}) => theme.COLORS.H1};
        }

        .input-wrapper div {
          background-color: transparent;
          border: ${ ({theme}) => `1px solid ${theme.COLORS.H1}`};
        }
      }
    }
  }
`

export const Form = styled.form`
  width: clamp(23rem, 70vw + .1rem, 47.6rem);
  padding: 0 clamp(.1rem, 5% + .1rem, 6.4rem);
  padding-top: 73px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  >h2 {
    display: none;
  }
`