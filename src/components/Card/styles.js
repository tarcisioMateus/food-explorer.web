import styled from "styled-components"

export const Container = styled.div`
  padding: 2.4rem;
  width: 21rem;
  height: 29.2rem;

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

  >img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  >h4 {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
  }

  >p {
    color: ${ ({theme}) => theme.COLORS.SPAN};
    line-height: 100%;
  }
`