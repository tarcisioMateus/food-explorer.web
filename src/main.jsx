import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { AuthProvider } from './hooks/auth'
import { OrderProvider } from './hooks/order'
import { FavoriteProvider } from './hooks/favorite'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <OrderProvider>
          <FavoriteProvider>
            <Routes/>
          </FavoriteProvider>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
