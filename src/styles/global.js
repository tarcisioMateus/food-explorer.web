import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      height: .8rem;
      width: .8rem;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      border: ${ ({theme}) => `1px solid ${theme.COLORS.MENU_BUTTON_LIST_BB}`};
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${ ({theme}) => theme.COLORS.MENU_BUTTON_LIST_BB};
    }
  }

  .sr-only {
    border: 0 ;
    clip: rect(1px, 1px, 1px, 1px) ; 
    height: 1px ;
    margin: -1px ;
    overflow: hidden ;
    padding: 0 ;
    position: absolute ;
    width: 1px ;
    white-space: nowrap ;            
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