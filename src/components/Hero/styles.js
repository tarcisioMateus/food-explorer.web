import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  margin: 4.4rem 1.6rem 0 3.6rem;
  width: 100vw;

  >div {
    display: flex;
    padding: 3.6rem 2.1rem 2.2rem 15.3rem;
    background: linear-gradient(0deg, rgba(0,2,28,1) 0%, rgba(9,30,38,1) 100%);
    height: 12rem;

  
    position: relative;
  
    img {
      position: absolute;
      left: -3rem;
      top: -2.9rem;
    }
  
    >div {
      >h2 {
        font-size: 1.8rem;
        line-height: 140%;
        font-weight: 600;
        margin-bottom: .3rem;
      }
    
      >p {
        font-size: 1.2rem;
        line-height: 140%;
        font-weight: 400;
      }
    }
  }

  @media only screen and (${DEVICES.sm}) {
    margin: auto;
    margin-top: 6rem;
    width: var(--main-width);
    align-self: center;

    >div {
      padding: 3.6rem 0;
      padding-left: 28rem;
      height: 14rem;

      img {
        position: absolute;
        left: -4rem;
        top: -5.9rem;
      }

      >div {
        margin-right: .4rem;
      }
    }
  }

  @media only screen and (${DEVICES.md}) {
    margin: auto;
    margin-top: 10rem;
    width: var(--main-width);
    align-self: center;

    >div {
      padding: 4.5rem 0;
      padding-left: 40rem;
      height: 20rem;

      img {
        position: absolute;
        left: -6rem;
        top: -10rem;
      }

      >div {

        >h2 {
          font-size: 2.4rem;
          font-weight: 500;
          margin-bottom: .5rem;
        }

        >p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media only screen and (${DEVICES.xl}) {
    margin: auto;
    margin-top: 14rem;
    width: var(--main-width);
    align-self: center;

    >div {
      padding: 8rem 0;
      padding-left: 60rem;
      height: 26rem;

      img {
        position: absolute;
        left: -8rem;
        top: -14rem;
      }

      >div {
        >h2 {
          font-size: 4rem;
          margin-bottom: .8rem;
        }

        >p {
          font-size: 1.6rem;
        }
      }
    }
  }
`