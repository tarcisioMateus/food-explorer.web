import styled from "styled-components"

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${ ({theme}) => theme.COLORS.FOOTER_BG};
  height: 7.7rem;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem;


  >p {
    font-size: 1.2rem;
    color: ${ ({theme}) => theme.COLORS.FOOTER_RIGHTS};
    font-family: ${ ({theme}) => theme.FOOTER_RIGHTS};
  }
`