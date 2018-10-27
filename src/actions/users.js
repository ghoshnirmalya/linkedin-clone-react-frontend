import constants from '../constants/users'
import api from '../lib/kitsu'
import extractQueryStringFromUrl from '../lib/extract-query-string-from-url'

export const fetchUsers = (page = 1) => async (dispatch, getState) => {
  dispatch({
    type: constants.FETCH_USERS_REQUEST
  })

  try {
    const response = await api.get('users', {
      page: getState().users.currentPage,
      search: getState().users.search
    })

    dispatch({
      type: constants.FETCH_USERS_SUCCESS,
      users: response.data,
      totalPages: parseInt(
        extractQueryStringFromUrl(response.links.last, 'page%5Bnumber%5D'),
        10
      )
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_USERS_FAILURE,
      errorMessage: error
    })
  }
}

export const resetUsers = () => dispatch => {
  dispatch({
    type: constants.RESET_USERS
  })
}

export const updateCurrentPage = (page = 1) => (dispatch, getState) => {
  dispatch({
    type: constants.UPDATE_CURRENT_PAGE,
    page
  })
}

export const updateSearch = search => dispatch => {
  dispatch({
    type: constants.UPDATE_USERS_SEARCH,
    search
  })
}
