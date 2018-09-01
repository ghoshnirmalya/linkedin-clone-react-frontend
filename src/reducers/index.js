import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import users from './users'

export default combineReducers({
  router: routerReducer,
  auth,
  users
})
