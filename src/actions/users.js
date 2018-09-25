import constants from '../constants/users'
import api from '../lib/kitsu'

export const fetchUsers = () => async dispatch => {
  dispatch({
    type: constants.FETCH_USERS_REQUEST
  })

  try {
    const response = await api.get('users')

    dispatch({
      type: constants.FETCH_USERS_SUCCESS,
      users: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_USERS_FAILURE,
      errorMessage: error
    })
  }
}
