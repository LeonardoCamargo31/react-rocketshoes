import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// englobar nossa aplicação ao Provider, assim ela tem acesso ao store
import { Provider } from 'react-redux'

import './config/ReactotronConfig'

import store from './store'

import Routes from './router'
// Tudo dentro que tem navegação deve estar dentro de BrowserRouter
// nosso header terá navegação
// por isso não colocamos o BrowserRouter em nossas rotas

import Header from './components/Header'

import GlobalStyle from './styles/global'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}

export default App
