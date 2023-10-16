import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${ ({theme}) => theme.COLORS.FOOTER_BG};
  height: 7.7rem;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;


  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 0 2.8rem;

    >p {
      font-size: 1.2rem;
      color: ${ ({theme}) => theme.COLORS.FOOTER_RIGHTS};
      font-family: ${ ({theme}) => theme.FOOTER_RIGHTS};
    }
  }

  @media only screen and (${DEVICES.sm}) {
    >div {
      margin: auto;
      width: var(--main-width);
      padding: 0;

      >p {
        font-size: 1.4rem;
        line-height: 160%;
      }
    }
  }
`