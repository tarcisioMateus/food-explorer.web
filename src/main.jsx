import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { InputWrapper } from './components/InputWrapper'
import { Button } from './components/Button'
import { AiOutlineSearch } from 'react-icons/ai'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)
