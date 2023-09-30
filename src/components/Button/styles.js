import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-radius: 0.5rem;
  padding: 1.2rem 0;

  line-height: 2.4rem;
  font-size: 1.4rem;

  >svg {
    margin-right: 0.6rem;
  }

  &.card {
    padding: 0.4rem 0;
  }
`