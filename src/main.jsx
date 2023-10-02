import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { Menu } from './pages/Menu'
import { Section } from './components/Section'
import { Nav } from './components/Nav'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Nav/>
      <Section 
        key={1}
        name='Diner'
        data={[{id:4, price:'18,00', name:'spagetty', img:''}, 
          {id:1, price:'18,00', name:'spagetty', img:''},
          {id:2, price:'18,00', name:'spagetty', img:''},
          {id:3, price:'18,00', name:'spagetty', img:''},
        ]}
      />
    </ThemeProvider>
  </React.StrictMode>
)
