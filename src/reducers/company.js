import produce from 'immer'

import constants from '../constants/company'

const initialState = {
  company: {},
  ui: {
    saving: false,
    doneSaving: false,
    saveError: '',
    fetching: false,
    doneFetching: false,
    fetchError: ''
  }
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.SAVE_COMPANY_REQUEST:
      draft.ui.saving = true

      break

    case constants.SAVE_COMPANY_SUCCESS:
      draft.company = action.company
      draft.ui.saving = false
      draft.ui.doneSaving = true
      draft.ui.saveError = ''

      break

    case constants.SAVE_COMPANY_FAILURE:
      draft.ui.saving = false
      draft.ui.doneSaving = false
      draft.ui.saveError = action.errorMessage

      break

    case constants.FETCH_COMPANY_REQUEST:
      draft.ui.fetching = true

      break

    case constants.FETCH_COMPANY_SUCCESS:
      draft.company = action.company
      draft.ui.fetching = false
      draft.ui.doneFetching = true
      draft.ui.fetchError = ''

      break

    case constants.FETCH_COMPANY_FAILURE:
      draft.ui.fetching = false
      draft.ui.doneFetching = false
      draft.ui.fetchError = action.errorMessage

      break

    case constants.UPDATE_COMPANY:
      draft.company[action.key] = action.value

      break

    case constants.RESET_COMPANY:
      return initialState

    default:
      break
  }
}, initialState)
