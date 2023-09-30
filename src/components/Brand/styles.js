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

  &.nav {
    >img {
      margin-right: 0.8rem;
      width: 2.4rem;
      height: 2.4rem;
    }

    >h1 {
      font-size: 2.1rem;
    }
  }

  &.footer {
    >img {
      margin-right: 0.8rem;
      width: 1.8rem;
      height: 1.8rem;

      transform: scaleX(1.22);
      filter: grayscale(.8);
    }

    >h1 {
      font-size: 1.5rem;
      color: ${ ({theme}) => theme.COLORS.FOOTER_BRAND};
    }
  }
`