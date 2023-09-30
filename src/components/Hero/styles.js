import styled from "styled-components"

export const Container = styled.div`
  margin: 4.4rem 1.6rem 0 3.6rem;
  background: linear-gradient(0deg, rgba(0,2,28,1) 0%, rgba(9,30,38,1) 100%);
  height: 12rem;
  width: 37.6rem;

  display: flex;
  padding: 3.6rem 2.1rem 2.2rem 15.3rem;

  position: relative;

  >img {
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
`