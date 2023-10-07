import styled from "styled-components"

import { devices } from "../../utils/sizeX"

export const Container = styled.nav`
  grid-area: nav;

  padding: 5.6rem 2.8rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({theme}) => theme.COLORS.NAV_BG};

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

  height: 11.4rem;
  width: 100vw;
  
  position: relative;

  @media only screen and (${devices.sm}) {
    gap: clamp(1.6rem, 2vw + .4rem, 3.2rem);

    #menu,
    >button:first-of-type {
      display: none;
    }

    >.input-wrapper,
    >button:last-of-type {
      display: inline;
    }
  }
`