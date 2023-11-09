import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  border: ${ ({theme}) => `2px solid ${theme.COLORS.TAG_BG}`};
  width: 100%;

  overflow-y: auto; 
  max-height: 50vh;

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
        position: sticky; 
        top: 0; 
        background: ${ ({theme}) => `linear-gradient(180deg, ${theme.COLORS.BG} 0%, ${theme.COLORS.TAG_BG} 100%)`};

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