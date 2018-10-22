import produce from 'immer'

import constants from '../constants/user'

const initialState = {
  user: {},
  ui: {
    fetching: false,
    doneFetching: false,
    fetchError: ''
  }
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.FETCH_USER_REQUEST:
      draft.ui.fetching = true

      break

    case constants.FETCH_USER_SUCCESS:
      draft.user = action.user
      draft.ui.fetching = false
      draft.ui.doneFetching = true
      draft.ui.fetchError = ''

      break

    case constants.FETCH_USER_FAILURE:
      draft.ui.fetching = false
      draft.ui.doneFetching = false
      draft.ui.fetchError = action.errorMessage

      break

    case constants.RESET_USER:
      return initialState

    default:
      break
  }
}, initialState)
