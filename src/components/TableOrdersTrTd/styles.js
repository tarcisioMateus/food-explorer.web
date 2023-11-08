import styled from 'styled-components'

export const Container = styled.tr`
  display: grid;
  grid-template-columns: min-content 15rem auto 15rem;

  text-align: left;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 160%;
  color: ${ ({theme}) => theme.COLORS.LABEL};
  
  border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};

  >td {
    border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};
    padding: 1.6rem 2.4rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`