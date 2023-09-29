import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${ ({theme}) => theme.COLORS.BG};
    color: ${ ({theme}) => theme.COLORS.MAIN_T};
  }

  body, input, label, button, select, textarea{
    font-family: ${ ({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 1.6rem;
  }

  .brand {
    font-family: ${ ({theme}) => theme.FONT_FAMILY.BRAND};
    font-weight: 700;
  }

  button {
    border: none;
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_BG};
    color: ${ ({theme}) => theme.COLORS.BUTTON_T};
    font-weight: 500;

    cursor: pointer;
    transition: all 300ms;
  }
  button:hover {
    transform: scale(1.025);
    filter: grayscale(30%) drop-shadow(0px 1px 2px grey);
  }
`