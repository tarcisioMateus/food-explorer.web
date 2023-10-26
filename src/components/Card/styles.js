import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"


export const Container = styled.div`
  padding: 2.4rem;
  width: clamp(21rem, 30vw + .1rem , 30.4rem);
  height: clamp(29.2rem, 45vw + .1rem, 46.2rem); 

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  position: relative;
  
  >button:first-of-type {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;

    width: min-content;
  }

  >button:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    background: none;

    >img {
      width: clamp(8.8rem, .1rem + 15vw, 17.6rem);
      height: clamp(8.8rem, .1rem + 15vw, 17.6rem);
      border-radius: 50%;
      object-fit: cover;
    }
  
    >h4 {
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 500;
  
      >span{
        margin-left: .8rem;
      }
    }

    >p:first-of-type {
      display: none;
    }
  }


  >p:last-of-type {
    color: ${ ({theme}) => theme.COLORS.SPAN};
    line-height: 100%;
    font-size: 1.6rem;
  }

  >div:last-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }

  @media only screen and (${DEVICES.sm}) {

    gap: clamp(1.2rem, 1.8vw + .1rem, 1.5rem);

    >button:nth-of-type(2) {
      gap: clamp(1.2rem, 1.8vw + .1rem, 1.5rem);

      >h4 {
        font-size: clamp(1.4rem, 2.2vw + .1rem , 2.4rem);
        line-height: 140%;
        font-weight: 700;
      }
    }

    >p:last-of-type {
      font-size: clamp(1.6rem, 2.5vw + .1rem, 3.2rem);
      line-height: 160%;
    }
  }

  @media only screen and (${DEVICES.md}) {
    
    >button:nth-of-type(2) {

      >p:first-of-type {
        display: inline-block;
        font-size: 1.4rem;
        line-height: 160%;
        color: ${ ({theme}) => theme.COLORS.LABEL};
      }
    }
    
    >div:last-of-type {
      flex-direction: row;
      gap: 1.6rem;

      >button:last-of-type {
        width: clamp(50%, 50%, 9.2rem);
        height: clamp(3.6rem, 4.5vw + .1rem , 4.8rem);
      }
    }

  }
`