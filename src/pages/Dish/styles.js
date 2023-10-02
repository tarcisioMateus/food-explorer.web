import styled from "styled-components"

export const Container = styled.div`
  width: min-content;
  margin: auto;
`
export const Content = styled.main`
  padding: 1.6rem 5.6rem 3.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >button:first-of-type {
    align-self: flex-start;
    width: min-content;

    font-size: 2.4rem;
    line-height: 140%;

    >svg {
      margin-right: .2rem;
    }
  }

  >img {
    min-width: 26.4rem;
    min-height: 26.4rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 1.6rem 0;
  }

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
      padding: 0.8rem;

      font-size: .94rem;
      line-height: 1.6rem;
      font-weight: 500;

      >img {
        height: 1.48rem;
        width: 1.75rem;
        margin-right: 0.75rem;
      }
    } 
  }
`