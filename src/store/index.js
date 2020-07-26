// configuração inicial do redux

import { createStore } from 'redux'

// mas vamos deixar essa função em modules/cart/reducer.js
// function cart() {
//   return []
// }
import rootReducer from './modules/rootReducer'

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null

// precisamos de pelo menos um reducer para criar a store
const store = createStore(rootReducer, enhancer)

export default store
