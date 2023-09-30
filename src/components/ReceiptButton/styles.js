import styled from "styled-components"

export const Container = styled.button`
  background: none;
  width: 2.6rem;
  height: 2.2rem;
  
  margin: 1.1rem .8rem .5rem 0;
  position: relative;
  
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
`