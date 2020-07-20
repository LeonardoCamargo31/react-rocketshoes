import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './router'
// Tudo dentro que tem navegação deve estar dentro de BrowserRouter
// nosso header terá navegação
// por isso não colocamos o BrowserRouter em nossas rotas

import Header from './components/Header'

import GlobalStyle from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
