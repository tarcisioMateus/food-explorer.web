import styled from "styled-components"

export const Container = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${ ({theme}) => theme.COLORS.TAG_BG};

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: ${ ({theme}) => theme.COLORS.TAG_T};
`