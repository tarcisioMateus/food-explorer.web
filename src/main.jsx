import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { Dish } from './pages/Dish'
import { Item } from './components/Item'

import { FiUpload } from 'react-icons/fi'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Item value='mehehe'/>
      <Item isNew/>
      <Item value='mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'/>
      <Item value='MMMMMMMMMM'/>
    </ThemeProvider>
  </React.StrictMode>
)
