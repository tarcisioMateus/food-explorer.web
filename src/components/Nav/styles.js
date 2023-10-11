import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.nav`
  grid-area: nav;
  background-color: ${ ({theme}) => theme.COLORS.NAV_BG};

  height: 11.4rem;
  width: 100vw;
  
  position: relative;

  >div {
    padding: 5.6rem 2.8rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    >button:first-of-type {
      width: max-content;
    } 
  
    >.input-wrapper {
      display: none;
      max-width: 42vw;
    }
  
    >button:last-of-type {
      display: none;
      width: min-content;
      height: 3.2rem;
    }
  }



  @media only screen and (${DEVICES.sm}) {

    >div {
      margin: auto;
      width: var(--main-width);
      padding: 2.85rem 0;
      gap: clamp(1.6rem, 2vw + .2rem, 3.2rem);
  
      #menu,
      >button:first-of-type {
        display: none;
      }
  
      >.input-wrapper,
      >button:last-of-type {
        display: inline;
      }
    }
  }

  @media only screen and (${DEVICES.lg}) {
    >div {
      gap: clamp(1.6rem, 1vw + .1rem, 3.2rem);
    }
  }
`