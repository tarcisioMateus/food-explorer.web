import styled from "styled-components"
import { devices } from "../../utils/sizeX"

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

  &.nav {
    >img {
      margin-right: 0.8rem;
      width: clamp(2.4rem, .1rem + 3.7vw, 3rem);
      height: clamp(2.4rem, .1rem + 3.7vw, 3rem);
    }

    >h1 {
      font-size: clamp(2.1rem, .2rem + 3vw, 2.4rem);
    }
  }

  &.footer {
    >img {
      margin-right: 0.8rem;
      width: clamp(1.8rem, .1rem + 3.7vw, 3rem);
      height: clamp(1.8rem, .1rem + 3.7vw, 3rem);

      transform: scaleX(1.22);
      filter: grayscale(.8);
    }

    >h1 {
      font-size: clamp(1.5rem, .1rem + 3vw, 2.4rem);
      color: ${ ({theme}) => theme.COLORS.FOOTER_BRAND};
    }
  }


  @media only screen and (${devices.sm}) {

    >img {
      margin-right: clamp(1rem, 0.2rem + 1.5vw, 1.9rem);
      width: clamp(3.9rem, .5rem + 5vw, 4.95rem);
      height: clamp(4.4rem, .4rem + 4.6vw, 4.75rem);
    }

    >h1 {
      font-size: clamp(3.6rem, 3rem + 1vw, 4.2rem);
    }

    &.nav {
      >img {
        margin-right: 1rem;
      }
    }

    &.footer {
      >img {
        transform: scaleX(1);
        margin-right: 1rem;
      }
    }
  }
`