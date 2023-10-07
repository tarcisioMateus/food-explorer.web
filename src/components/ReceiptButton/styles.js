import styled from "styled-components"

import { devices } from '../../utils/sizeX'

export const Container = styled.button`
  background: none;
  width: 2.6rem;
  height: 2.2rem;
  
  margin: 1.1rem .8rem .5rem 0;
  position: relative;
  
  >p {
    display: none;
  }

  >div {
    position: absolute;
    top: -50%;
    left: 50%;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_BG};

    font-size: 1.4rem;
    color: ${ ({theme}) => theme.COLORS.BUTTON_T};
    font-weight: 500;
  }

  @media only screen and (${devices.lg}) {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_BG};

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    gap: .8rem;
    margin: 0;

    width: clamp(13.6rem, 5rem + 13vw, 21.6rem);
    height: 5.6rem;

    >p {
      display: inline;
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 500;
    }
    >div {
      display: none;
    }
  }
`