import constants from '../constants/company'
import api from '../lib/kitsu'

export const saveCompany = values => async (dispatch, getState) => {
  dispatch({
    type: constants.SAVE_COMPANY_REQUEST,
    company: values
  })

  try {
    const response = await api.create('companies', {
      name: values.name
    })

    dispatch({
      type: constants.SAVE_COMPANY_SUCCESS,
      company: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.SAVE_COMPANY_FAILURE,
      errorMessage: error
    })
  }
}
