import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import users from './users'
import user from './user'
import companies from './companies'
import company from './company'
import jobs from './jobs'
import job from './job'

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    users,
    user,
    companies,
    company,
    jobs,
    job
  })
