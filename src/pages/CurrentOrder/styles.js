import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: min-content auto min-content;
`

export const Content = styled.div`
  grid-area: content;
`