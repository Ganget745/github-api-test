import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import repos from './repos'
import favorite from './favorite'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    repos,
    favorite
  })

export default createRootReducer
