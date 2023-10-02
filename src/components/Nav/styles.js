import styled from "styled-components"

export const Container = styled.nav`
  padding: 5.6rem 2.8rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({theme}) => theme.COLORS.NAV_BG};

  >button:first-of-type {
    width: max-content;
  } 

  height: 11.4rem;
  width: 428px;
  margin: auto;
  position: relative;
  
`