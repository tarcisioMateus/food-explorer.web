import styled from "styled-components"

export const Container = styled.div`

  max-width: 53rem;
  border: ${ ({theme}) => `1px solid ${theme.COLORS.ITEM_BG}`};
  border-radius: .8rem;
  overflow: hidden;

  .method {
    display: flex;
    height: 8.1rem;

    >line {
      border: ${ ({theme}) => `1px solid ${theme.COLORS.ITEM_BG}`};
    }
  }

  .info {
    min-height: 24.4rem;
  }
`

