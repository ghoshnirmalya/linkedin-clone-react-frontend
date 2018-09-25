import produce from 'immer'

import constants from '../constants/users'

const initialState = {
  users: {},
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
      draft.users = {}

      break

    case constants.FETCH_USERS_SUCCESS:
      action.users.forEach(user => {
        draft.users[user.id] = user
      })
      draft.ui.loading = false
      draft.ui.doneLoading = true
      draft.ui.loadError = ''

      break

    case constants.FETCH_USERS_FAILURE:
      draft.ui.loading = false
      draft.ui.doneLoading = false
      draft.ui.loadError = action.errorMessage

      break

    default:
      break
  }
}, initialState)
