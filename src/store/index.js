// configuração inicial do redux

import { createStore } from 'redux'

// mas vamos deixar essa função em modules/cart/reducer.js
// function cart() {
//   return []
// }
import rootReducer from './modules/rootReducer'

// precisamos de pelo menos um reducer para criar a store
const store = createStore(rootReducer)

export default store
