import styled from "styled-components"

export const Container = styled.div`
  --x-position: -100%;
  background-color: ${ ({theme}) => theme.COLORS.BG};

  transition: all 400ms;
  position: absolute;
  z-index: 1000;
  left: var(--x-position);
  top: 0;


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
  grid-area: form;
  padding: 3.6rem 2.8rem;

  >div:first-of-type {
    padding-bottom: 3.6rem;
  }

`