import styled from "styled-components"

export const Container = styled.div`
  width: min-content;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.4rem;
  margin-bottom: 0.4rem;

  >span {
    font-size: 1.6rem;
  }
  
  &.dish {
    gap: 1.6rem;
    margin-bottom: 0;

    >span {
      font-size: 2.26rem;
      line-height: 160%;
      font-weight: 600;
  }
  }
`