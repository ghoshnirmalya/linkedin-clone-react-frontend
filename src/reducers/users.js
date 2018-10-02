import produce from 'immer'

import constants from '../constants/users'

const initialState = {
  users: {},
  currentPage: 1,
  totalPages: 0,
  ui: {
    loading: false,
    doneLoading: false,
    loadError: ''
  }
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.FETCH_USERS_REQUEST:
      draft.ui.loading = true

      break

    case constants.FETCH_USERS_SUCCESS:
      action.users.forEach(user => {
        draft.users[user.id] = user
      })
      draft.totalPages = action.totalPages
      draft.ui.loading = false
      draft.ui.doneLoading = true
      draft.ui.loadError = ''

      break

    case constants.FETCH_USERS_FAILURE:
      draft.ui.loading = false
      draft.ui.doneLoading = false
      draft.ui.loadError = action.errorMessage

      break

    case constants.UPDATE_CURRENT_PAGE:
      draft.currentPage = action.page

      break

    case constants.RESET_USERS:
      return initialState

    default:
      break
  }
}, initialState)
