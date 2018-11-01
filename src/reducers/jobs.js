import produce from 'immer'

import constants from '../constants/jobs'

const initialState = {
  jobs: [],
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
    case constants.FETCH_JOBS_REQUEST:
      draft.ui.fetching = true

      break

    case constants.FETCH_JOBS_SUCCESS:
      draft.jobs = action.jobs
      draft.totalPages = action.totalPages
      draft.ui.fetching = false
      draft.ui.doneFetching = true
      draft.ui.fetchError = ''

      break

    case constants.FETCH_JOBS_FAILURE:
      draft.ui.fetching = false
      draft.ui.doneFetching = false
      draft.ui.fetchError = action.errorMessage

      break

    case constants.UPDATE_CURRENT_PAGE:
      draft.currentPage = action.page

      break

    case constants.RESET_JOBS:
      return initialState

    case constants.UPDATE_JOBS_SEARCH:
      draft.search = action.search

      break

    default:
      break
  }
}, initialState)
