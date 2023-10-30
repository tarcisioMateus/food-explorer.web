import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"


export const Container = styled.div`
  display: grid;
  grid-template-areas: "nav" "content-scroll";
  grid-template-rows: min-content auto;
  height: 100vh;
  width: 100vw;

  .body-content {
    grid-area: content-scroll;
    overflow-y: auto;

    #hero {
      margin-bottom: 6.2rem;
    }

    #sections {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2.4rem;
      margin-bottom: 2.5rem;
    }
  }
  
  &[data-search="true"] {
    grid-template-areas: "nav" "content-scroll" "footer";
    grid-template-rows: min-content auto min-content;

    .body-content {
      display: none;
    }

    .results {
      padding: 2rem 0;
      height: 100%;
      grid-area: content-scroll;
      overflow-y: auto;

      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  @media only screen and (${DEVICES.md}) {
    .body-content {
      #sections {
        gap: clamp(2.4rem, 3.5vw + .1rem, 4.6rem);
      }
    }
  }
`


export const NotFound = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp( .5rem, 1vw, 1rem);

  >svg {
    color: ${ ({theme}) => theme.COLORS.INPUT_AUTH_BG };
    font-size: clamp( 8rem, 20vw, 17rem);
  }

  >h3 {
    font-size: clamp( 3rem, 9vw, 7rem);
    color: ${ ({theme}) => theme.COLORS.INPUT_AUTH_BG };
    font-weight: 400;
  }
`