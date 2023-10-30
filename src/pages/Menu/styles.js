import styled from "styled-components"

export const Container = styled.div`
  background-color: ${ ({theme}) => theme.COLORS.BG};

  transition: all 400ms;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;

  transform: translateX(-100%);
  transition: transform .3s ease-in-out ;

  &[data-menu-is-open="true"] {
    transform: translateX(0%)
  }

  height: 100vh;
  width: 100vw;
  
  display: grid;
  grid-template-areas: "nav" "form" "footer";
  grid-template-rows: min-content auto min-content; 

  >div:first-of-type {
    grid-area: nav;

    display: flex;
    align-items: center;
    padding: 5.6rem 2.8rem 2.4rem;
    background-color: ${ ({theme}) => theme.COLORS.NAV_BG};

    >button:first-of-type {
      width: min-content;
      margin-right: 1.6rem;
    }

    >h3 {
      color: ${ ({theme}) => theme.COLORS.H1};
      font-size: 2.2rem;
      font-weight: 400;
    }
  }
`

export const Form = styled.form`
  overflow-y: auto;
  
  grid-area: form;
  padding: 3.6rem 2.8rem;
  max-width: 100vw;

  >div:first-of-type {
    padding-bottom: 3.6rem;
  }

  .results {
    >section {
      max-width: calc( 100vw - (2 * 2.8rem));
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
    color: ${ ({theme}) => theme.COLORS.INPUT_T };
    font-size: clamp( 8rem, 20vw, 17rem);
  }

  >h3 {
    font-size: clamp( 3rem, 9vw, 7rem);
    color: ${ ({theme}) => theme.COLORS.INPUT_T };
    font-weight: 400;
  }
`