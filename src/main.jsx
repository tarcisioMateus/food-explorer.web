import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { SignIn } from './pages/SignIn'
import { Item } from './components/Item'

import { FiUpload } from 'react-icons/fi'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
)
