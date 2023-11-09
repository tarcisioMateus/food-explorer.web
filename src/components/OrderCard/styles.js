import styled from "styled-components"

export const Container = styled.div`
  text-align: left;
  font-size: 1.4rem;
  line-height: 160%;
  font-weight: 400;
  color: ${ ({theme}) => theme.COLORS.LABEL};

  width: 100%;
  height: min-content;

  padding: 1.6rem 2.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};
  border-radius: .8rem;

  >div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3.2rem;
  }
`