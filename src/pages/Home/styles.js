import styled from "styled-components"

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


`