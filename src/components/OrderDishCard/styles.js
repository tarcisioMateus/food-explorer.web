import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  max-width: 44rem;

  button {
    background: none;
    border: none;
    outline: none;
    width: fit-content;
  }

  .open-dish {

    >img {
      width: 7.2rem;
      height: 7.2rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  >div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    width: 100%;

    >h4,
    >h4 .amount {
      color: ${ ({theme}) => theme.COLORS.MAIN_T};
      font-size: 2rem;
      line-height: 160%;
      font-weight: 500;
      white-space: nowrap;
      width: 100%;

      .price {
        color: ${ ({theme}) => theme.COLORS.LABEL};
        font-size: 1.2rem;
        line-height: 160%;
        font-weight: 400;

        display: inline-block;
        margin-left: 1rem;
      }

      .amount, 
      .price {
        display: none;
      }
    }

    .remove {
      font-size: 1.2rem;
      line-height: 160%;
      font-weight: 400;
      white-space: nowrap;
      color: ${ ({theme}) => theme.COLORS.BUTTON_ADMIN_BG};
    }
  }

  &[data-removed="true"] {
    display: none;
  }

  @media only screen and (${DEVICES.sm}) {
    >div >h4 {
      .amount, 
      .price {
        display: inline;
      }
    }
  }
`