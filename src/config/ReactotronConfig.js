import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().use(reactotronRedux()).connect()

  tron.clear()
  console.tron = tron
}

// executando no terminal
// ./reactotron.appimage

// backup do state
// snapshot > add backup
// só clicar na seta para cima
