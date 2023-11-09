import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};
  width: 100%;

  >table {

    border-spacing: 0;
    border-collapse: collapse;
    border-style: hidden;
    width: 100%;
 
    text-align: left;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 160%;
  
    >thead {
  
      tr, th {
        padding: 2.1rem 2.4rem;
        border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};
      }
    }

    >tbody {
      font-weight: 400;
      color: ${ ({theme}) => theme.COLORS.LABEL};

      tr, td {
        padding: 2.1rem 2.4rem;
        border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};
      }
      td {
        min-width: 15rem;

      }
    }
  }

`