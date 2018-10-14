import constants from '../constants/company'
import api from '../lib/kitsu'

export const saveCompany = () => async (dispatch, getState) => {
  const company = getState().company.company

  dispatch({
    type: constants.SAVE_COMPANY_REQUEST,
    company
  })

  try {
    let response

    if (company.id) {
      response = await api.update('companies', { id: company.id, name: company.name })
    } else {
      response = await api.create('companies', { name: company.name })
    }

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

export const fetchCompany = id => async dispatch => {
  dispatch({
    type: constants.FETCH_COMPANY_REQUEST,
    id
  })

  try {
    const response = await api.fetch(`companies/${id}`)

    dispatch({
      type: constants.FETCH_COMPANY_SUCCESS,
      company: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_COMPANY_FAILURE,
      errorMessage: error
    })
  }
}

export const updateCompany = (key, value) => dispatch => {
  dispatch({
    type: constants.UPDATE_COMPANY,
    key,
    value
  })
}

export const resetCompany = () => dispatch => {
  dispatch({
    type: constants.RESET_COMPANY
  })
}
