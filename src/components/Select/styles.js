import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  >label {
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.LABEL };

    display: block;
    margin-bottom: 1.6rem;
  }

  >select {
    padding: 1.3rem 1.6rem;
    border-radius: 0.5rem;
    background-color: ${ ({theme}) => theme.COLORS.INPUT_AUTH_BG };

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 4.8rem;

    color: ${ ({theme}) => theme.COLORS.LABEL };
    font-size: 1.4rem;
    line-height: 160%;
    font-weight: 400;

    &:focus,
    &:hover {
      outline: ${ ({theme}) => `2px solid ${theme.COLORS.INPUT_T}` };
    }
    
    -webkit-appearance:none;
    appearance:none;

    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjUnIHZpZXdCb3g9JzAgMCAyNCAyNScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTQuNDU0NSA4Ljc1MzU4QzQuODkzODQgOC4zMTQyNCA1LjYwNjE2IDguMzE0MjQgNi4wNDU1IDguNzUzNThMMTIgMTQuNzA4MUwxNy45NTQ1IDguNzUzNThDMTguMzkzOCA4LjMxNDI0IDE5LjEwNjIgOC4zMTQyNCAxOS41NDU1IDguNzUzNThDMTkuOTg0OCA5LjE5MjkyIDE5Ljk4NDggOS45MDUyMyAxOS41NDU1IDEwLjM0NDZMMTIuNzk1NSAxNy4wOTQ2QzEyLjM1NjIgMTcuNTMzOSAxMS42NDM4IDE3LjUzMzkgMTEuMjA0NSAxNy4wOTQ2TDQuNDU0NSAxMC4zNDQ2QzQuMDE1MTcgOS45MDUyMyA0LjAxNTE3IDkuMTkyOTIgNC40NTQ1IDguNzUzNThaJyBmaWxsPScjQzRDNENDJy8+PC9zdmc+Cg==");
    background-repeat: no-repeat;
    background-position: calc(100% - 1.6rem) center;
  }
`