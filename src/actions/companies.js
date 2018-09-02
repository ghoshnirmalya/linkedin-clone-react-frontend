import constants from '../constants/companies'
import api from '../lib/kitsu'

export const fetchCompanies = () => async dispatch => {
  dispatch({
    type: constants.FETCH_COMPANIES_REQUEST
  })

  try {
    const response = await api.get('companies')

    dispatch({
      type: constants.FETCH_COMPANIES_SUCCESS,
      companies: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_COMPANIES_FAILURE,
      errorMessage: error.statusText
    })
  }
}
