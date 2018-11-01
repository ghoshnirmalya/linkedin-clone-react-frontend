import produce from 'immer'

import constants from '../constants/job'

const initialState = {
  job: {},
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
    case constants.SAVE_JOB_REQUEST:
      draft.ui.saving = true

      break

    case constants.SAVE_JOB_SUCCESS:
      draft.job = action.job
      draft.ui.saving = false
      draft.ui.doneSaving = true
      draft.ui.saveError = ''

      break

    case constants.SAVE_JOB_FAILURE:
      draft.ui.saving = false
      draft.ui.doneSaving = false
      draft.ui.saveError = action.errorMessage

      break

    case constants.FETCH_JOB_REQUEST:
      draft.ui.fetching = true

      break

    case constants.FETCH_JOB_SUCCESS:
      draft.job = action.job
      draft.ui.fetching = false
      draft.ui.doneFetching = true
      draft.ui.fetchError = ''

      break

    case constants.FETCH_JOB_FAILURE:
      draft.ui.fetching = false
      draft.ui.doneFetching = false
      draft.ui.fetchError = action.errorMessage

      break

    case constants.UPDATE_JOB:
      draft.job[action.key] = action.value

      break

    case constants.RESET_JOB:
      return initialState

    default:
      break
  }
}, initialState)
