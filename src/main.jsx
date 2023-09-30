import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { SignUp } from './pages/SignUp'
import { ReceiptButton } from './components/ReceiptButton'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ReceiptButton/>
    </ThemeProvider>
  </React.StrictMode>
)
