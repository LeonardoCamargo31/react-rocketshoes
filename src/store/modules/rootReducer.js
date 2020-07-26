// para combinar vários reducers em um único reducer
import { combineReducers } from 'redux'

import cart from './cart/reducer'

export default combineReducers({
  cart,
})
