import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { Dish } from './pages/Dish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Dish
      img='spaguetty img' name='spaguetty' description='spaguetty dish spaguetty dish spaguetty dish spaguetty dish spaguetty dish spaguetty dish spaguetty dish spaguetty dish' price='18,00' tags={['water', 'wine', 'macarons', 'a lot of things']}/>
    </ThemeProvider>
  </React.StrictMode>
)
