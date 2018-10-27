import produce from 'immer'

import constants from '../constants/users'

const initialState = {
  users: [],
  currentPage: 1,
  totalPages: 0,
  ui: {
    fetching: false,
    doneFetching: false,
    fetchError: ''
  },
  search: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.FETCH_USERS_REQUEST:
      draft.ui.fetching = true

      break

    case constants.FETCH_USERS_SUCCESS:
      draft.users = action.users
      draft.totalPages = action.totalPages
      draft.ui.fetching = false
      draft.ui.doneFetching = true
      draft.ui.fetchError = ''

      break

    case constants.FETCH_USERS_FAILURE:
      draft.ui.fetching = false
      draft.ui.doneFetching = false
      draft.ui.fetchError = action.errorMessage

      break

    case constants.UPDATE_CURRENT_PAGE:
      draft.currentPage = action.page

      break

    case constants.RESET_USERS:
      return initialState

    case constants.UPDATE_USERS_SEARCH:
      draft.search = action.search

      break

    default:
      break
  }
}, initialState)
