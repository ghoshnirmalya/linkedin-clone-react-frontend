import produce from 'immer'

import constants from '../constants/companies'

const initialState = {
  companies: {},
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
    case constants.FETCH_COMPANIES_REQUEST:
      draft.ui.loading = true

      break

    case constants.FETCH_COMPANIES_SUCCESS:
      action.companies.forEach(company => {
        draft.companies[company.id] = company
      })
      draft.totalPages = action.totalPages
      draft.ui.loading = false
      draft.ui.doneLoading = true
      draft.ui.loadError = ''

      break

    case constants.FETCH_COMPANIES_FAILURE:
      draft.ui.loading = false
      draft.ui.doneLoading = false
      draft.ui.loadError = action.errorMessage

      break

    case constants.UPDATE_CURRENT_PAGE:
      draft.currentPage = action.page

      break

    case constants.RESET_COMPANIES:
      return initialState

    default:
      break
  }
}, initialState)
