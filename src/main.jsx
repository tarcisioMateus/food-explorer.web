import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { AuthProvider } from './hooks/auth'
import { OrderProvider } from './hooks/order'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <OrderProvider>
          <Routes/>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
