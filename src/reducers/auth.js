import produce from 'immer'

import constants from '../constants/auth'

const initialState = {
  ui: {
    loading: false,
    doneLoading: false,
    loadError: ''
  }
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.AUTH_REQUEST:
      draft.ui.loading = true
      draft.ui.loadError = ''

      break

    case constants.AUTH_SUCCESS:
      draft.ui.loading = false
      draft.ui.doneLoading = true

      break

    case constants.AUTH_FAILURE:
      draft.ui.loading = false
      draft.ui.loadError = action.errorMessage

      break

    default:
      break
  }
}, initialState)
