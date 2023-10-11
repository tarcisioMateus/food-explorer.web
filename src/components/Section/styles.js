import styled from "styled-components"

import { devices } from "../../utils/sizeX"

export const Container = styled.section`
  padding-left: 2.4rem;
  width: 100vw;

  >h3 {
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  .scroll {
    overflow-x: auto;

    >div {
      display: flex;
      width: max-content;
      gap: clamp(1.6rem, 2vw, 2.7rem);
    }
  }

  @media only screen and (${devices.sm}) {
    width: var(--main-width);
    padding: 0;
    margin: auto;

    >h3 {
      font-size: clamp(1.8rem, .1rem + 3vw, 3.2rem);
    }
  }
`