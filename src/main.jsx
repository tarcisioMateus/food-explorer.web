import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { Dish } from './pages/Dish'
import { Home } from './pages/Home'
import { Section } from './components/Section'
import { Nav } from './components/Nav'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Dish
        img='./assets/brand.svg' name='Ice Cream' 
        description='yes yes yes, ice cream so good yes yes yes, ice cream so good yes yes yes, ice cream so good yes yes yes, ice cream so good ' 
        tags={['ice', 'suger', 'fruits', 'berries',
        'ice', 'suger', 'fruits', 'berries']}
        price={'4,00'}
      />
    </ThemeProvider>
  </React.StrictMode>
)
