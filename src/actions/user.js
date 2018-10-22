import constants from '../constants/user'
import api from '../lib/kitsu'

export const fetchUser = id => async dispatch => {
  dispatch({
    type: constants.FETCH_USER_REQUEST,
    id
  })

  try {
    const response = await api.fetch(`users/${id}`)

    dispatch({
      type: constants.FETCH_USER_SUCCESS,
      user: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_USER_FAILURE,
      errorMessage: error
    })
  }
}

export const resetUser = () => dispatch => {
  dispatch({
    type: constants.RESET_USER
  })
}
