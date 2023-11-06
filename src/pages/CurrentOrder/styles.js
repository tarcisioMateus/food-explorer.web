import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: min-content auto min-content;
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding: 5.6rem clamp(2.8rem, 1vw, 5.6rem);

  >main {
    >div {
      display: flex;
      flex-direction: column;


      >h2 {
        font-size: 3.2rem;
        line-height: 140%;
        font-weight: 500;
        margin-bottom: 2.7rem;
      }

      >h3 {
        font-size: 2rem;
        line-height: 160%;
        font-weight: 500;
        margin-top: 1.6rem;
      }

      >button {
        max-width: 21.6rem;
        margin-top: 4.7rem;
        align-self: flex-end;
      }
    }

    >.payment {
      display: none;
    }
  }

  &[data-action="payment"] {
    .order-info {
      display: none;
    }
    .payment {
      display: flex;
    }
  }

  @media only screen and (${DEVICES.sm}) {
    padding: 5.6rem 0;
    width: var(--main-width);
    margin: 0 auto;
  }

  @media only screen and (${DEVICES.lg}) {
    >main {
      display: flex;
      gap: 1.2rem;

      >.order-info,
      >.payment {
        display: flex;
        flex: 1;
      }

      >.order-info >button:last-of-type {
        display: none;
      }
    }

    &[data-action="payment"] {
      .order-info,
      .payment {
        display: flex;
        flex: 1;
      }
    }

  }
`