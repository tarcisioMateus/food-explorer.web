
import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  >img {
    margin-right: 1rem;
  }

  >h1 {
    font-family: ${ ({theme}) => theme.FONT_FAMILY.BRAND};
    color: ${ ({theme}) => theme.COLORS.H1};
    font-weight: 700;
    font-size: 3.6rem;
  }
`