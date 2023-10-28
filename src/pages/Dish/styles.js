import styled from "styled-components"

import { DEVICES } from "../../styles/responsiveX"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "nav" "content-scroll" "footer";
  grid-template-rows: min-content auto min-content;
`
export const Content = styled.main`
  grid-area: content-scroll;
  overflow-y: auto;
  overflow-x: hidden;
  
  padding: 1.6rem clamp(2.8rem, 1vw, 5.6rem) 3.3rem;

  >button:first-of-type {
    align-self: flex-start;
    width: min-content;
  
    font-size: 2.4rem;
    line-height: 140%;
  
    >svg {
      margin-right: .2rem;
    }
  }

  >div {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    >img {
      --size: clamp( 20rem, 60vw, 26.4rem);
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      object-fit: cover;
      margin: 1.6rem 0;
    }
  
    >div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      >h2 {
        font-size: 2.7rem;
        line-height: 140%;
        font-weight: 500;
        margin-bottom: 2.4rem;
      }
    
      >p {
        font-size: 1.6rem;
        line-height: 140%;
        margin-bottom: 2.4rem;
        text-align: center;
      }
    
      #tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
        padding: 0 2.4rem;
        margin-bottom: 4.8rem;
      }
    
      >div:last-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        gap: 1.6rem;
        width: 100%;
    
        >button:last-of-type {
          width: clamp(8rem, 50%, 15rem);
          padding: clamp(0.8rem, 2.5vw, 1.2rem);
    
          font-size: clamp(1rem, 3vw, 1.4rem);
          line-height: 160%;
          font-weight: 500;
    
          >img {
            height: 1.48rem;
            width: 1.75rem;
            margin-right: 0.75rem;
          }
        } 
      }

      .edit-button {
        max-width: 20rem;
      }
    }
  }

  @media only screen and (${DEVICES.sm}) {
    padding: 1.6rem 0 3.3rem;
    width: var(--main-width);
    margin: 0 auto;

    >div {
      margin-top: clamp( 1.6rem, 3vw, 4.2rem);
      flex-direction: row;
      gap: clamp(2rem, 4%, 4.8rem);

      >img {
        --size: clamp( 20rem, 35vw, 39rem);
        margin: 0;
      }

      >div {
        align-items: flex-start;
        justify-content: center;

        >h2 {
          font-size: clamp(2.7rem, 4vw, 4rem);
        }
      
        >p {
          text-align: start;
        }
      
        #tags {
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1.2rem;
          padding: 0;
        }
      
        >div:last-of-type {
          justify-content: flex-start;
          gap: clamp(1.6rem, 3.3vw ,3.3rem);
      
          >button:last-of-type {
            line-height: 2.4rem;
      
            >img {
              display: none;
            }
          } 
        }
      }
    }
  }
`