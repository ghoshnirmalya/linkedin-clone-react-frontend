import constants from '../constants/companies'
import api from '../lib/kitsu'
import extractQueryStringFromUrl from '../lib/extract-query-string-from-url'

export const fetchCompanies = (page = 1) => async (dispatch, getState) => {
  dispatch({
    type: constants.FETCH_COMPANIES_REQUEST
  })

  try {
    const response = await api.get('companies', {
      page: getState().companies.currentPage,
      search: getState().companies.search
    })

    dispatch({
      type: constants.FETCH_COMPANIES_SUCCESS,
      companies: response.data,
      totalPages: parseInt(extractQueryStringFromUrl(
        response.links.last,
        'page%5Bnumber%5D'
      ), 10)
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_COMPANIES_FAILURE,
      errorMessage: error
    })
  }
}

export const resetCompanies = () => dispatch => {
  dispatch({
    type: constants.RESET_COMPANIES
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
    type: constants.UPDATE_COMPANIES_SEARCH,
    search
  })
}
