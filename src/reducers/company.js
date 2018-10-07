import produce from 'immer'

import constants from '../constants/company'

const initialState = {
  company: {},
  ui: {
    saving: false,
    doneSaving: false,
    saveError: ''
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

    default:
      break
  }
}, initialState)
