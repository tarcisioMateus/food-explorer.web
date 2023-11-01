import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: "nav" "content-scroll" "footer";
  grid-template-rows: min-content auto min-content;

`

export const Content = styled.div`
  grid-area: content-scroll;
  overflow-y: auto;

  >main {
    padding: 5.6rem 2.8rem;


    >div:first-of-type {
      margin-bottom: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >button:first-of-type {
        width: min-content;
      
        font-size: 2rem;
        line-height: 140%;
        font-weight: 400;
      
        >svg {
          margin-right: .2rem;
        }
      }
    }
  }

  @media only screen and (${DEVICES.sm}) {
    >main {
      padding: 5.6rem 0;
      margin: auto;
      width: var(--main-width);

      >div:last-of-type {
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
      }
    }
  }
`