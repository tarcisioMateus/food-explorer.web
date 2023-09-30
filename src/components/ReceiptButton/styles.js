import styled from "styled-components"

export const Container = styled.button`
  background: none;
  width: 2.6rem;
  height: 2.2rem;
  
  margin-top: 1.1rem;
  margin-bottom: .5rem;
  position: relative;
  
  >button {
    position: absolute;
    top: -50%;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    font-size: 1.4rem;
  }
`