import { combineReducers } from 'redux'

import vacant from './vacant'
import loading from './loading'

export default combineReducers({
  vacant,
  loading
})
