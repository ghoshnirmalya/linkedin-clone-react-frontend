import produce from 'immer'

import constants from '../constants/companies'

const initialState = {
  companies: [],
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
    case constants.FETCH_COMPANIES_REQUEST:
      draft.ui.fetching = true

      break

    case constants.FETCH_COMPANIES_SUCCESS:
      draft.companies = action.companies
      draft.totalPages = action.totalPages
      draft.ui.fetching = false
      draft.ui.doneFetching = true
      draft.ui.fetchError = ''

      break

    case constants.FETCH_COMPANIES_FAILURE:
      draft.ui.fetching = false
      draft.ui.doneFetching = false
      draft.ui.fetchError = action.errorMessage

      break

    case constants.UPDATE_CURRENT_PAGE:
      draft.currentPage = action.page

      break

    case constants.RESET_COMPANIES:
      return initialState

    case constants.UPDATE_COMPANIES_SEARCH:
      draft.search = action.search

      break

    default:
      break
  }
}, initialState)
