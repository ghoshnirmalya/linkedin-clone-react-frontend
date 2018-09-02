import produce from 'immer'

import constants from '../constants/companies'

const initialState = {
  companies: [],
  ui: {
    loading: false,
    doneLoading: false,
    loadError: ''
  }
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.FETCH_COMPANIES_REQUEST:
      draft.ui.loading = true

      break

    case constants.FETCH_COMPANIES_SUCCESS:
      draft.companies.push(...action.companies)
      draft.ui.loading = false
      draft.ui.doneLoading = true
      draft.ui.loadError = ''

      break

    case constants.FETCH_COMPANIES_FAILURE:
      draft.ui.loading = false
      draft.ui.doneLoading = false
      draft.ui.loadError = action.errorMessage

      break

    default:
      break
  }
}, initialState)
