import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import users from './users'
import user from './user'
import companies from './companies'
import company from './company'

export default combineReducers({
  router: routerReducer,
  auth,
  users,
  user,
  companies,
  company
})
