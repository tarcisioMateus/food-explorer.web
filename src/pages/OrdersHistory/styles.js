import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "nav" "content-scroll" "footer";
  grid-template-rows: min-content auto min-content;
`
export const Content = styled.main`
  grid-area: content-scroll;
  overflow-y: auto;
  
  padding: 1.6rem clamp(2.8rem, 1vw, 5.6rem) 3.3rem;

  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 2rem 3rem;

    >button:first-of-type {
      align-self: flex-start;
      width: min-content;
    
      font-size: 2.4rem;
      line-height: 140%;
    
      >svg {
        margin-right: .2rem;
      }
    }
  }

  >.table {
    display: none;
  }
  >.card-display {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media only screen and (${DEVICES.sm}) {
    padding: 0 2rem 3.3rem 0;
    width: var(--main-width);
    margin: 0 auto;
    margin-top: clamp( 1.6rem, 3vw, 4.2rem);
  }
  
  @media only screen and (${DEVICES.l}) {
    >.table {
      display: flex;
    }
    >.card-display {
      display: none;
    }
  }
`