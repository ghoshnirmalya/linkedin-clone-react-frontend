import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import users from './users'
import companies from './companies'

export default combineReducers({
  router: routerReducer,
  auth,
  users,
  companies
})
