import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { SignUp } from './pages/SignUp'
import { Nav } from './components/Nav'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Nav/>
    </ThemeProvider>
  </React.StrictMode>
)
