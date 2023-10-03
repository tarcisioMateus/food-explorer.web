import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { Dish } from './pages/Dish'
import { InputWrapper } from './components/InputWrapper'

import { FiUpload } from 'react-icons/fi'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <InputWrapper label='here' placeholder='he he he' />
    </ThemeProvider>
  </React.StrictMode>
)
