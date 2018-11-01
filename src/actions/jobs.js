import constants from '../constants/jobs'
import api from '../lib/kitsu'
import extractQueryStringFromUrl from '../lib/extract-query-string-from-url'

export const fetchJobs = (page = 1) => async (dispatch, getState) => {
  dispatch({
    type: constants.FETCH_JOBS_REQUEST
  })

  try {
    const response = await api.get('jobs', {
      page: getState().jobs.currentPage,
      search: getState().jobs.search
    })

    dispatch({
      type: constants.FETCH_JOBS_SUCCESS,
      jobs: response.data,
      totalPages: parseInt(extractQueryStringFromUrl(
        response.links.last,
        'page%5Bnumber%5D'
      ), 10)
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_JOBS_FAILURE,
      errorMessage: error
    })
  }
}

export const resetJobs = () => dispatch => {
  dispatch({
    type: constants.RESET_JOBS
  })
}

export const updateCurrentPage = (page = 1) => dispatch => {
  dispatch({
    type: constants.UPDATE_CURRENT_PAGE,
    page
  })
}

export const updateSearch = search => dispatch => {
  dispatch({
    type: constants.UPDATE_JOBS_SEARCH,
    search
  })
}
