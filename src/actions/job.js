import constants from '../constants/job'
import api from '../lib/kitsu'

export const saveJob = () => async (dispatch, getState) => {
  const job = getState().job.job

  dispatch({
    type: constants.SAVE_JOB_REQUEST,
    job
  })

  try {
    let response

    if (job.id) {
      response = await api.update('jobs', {
        id: job.id,
        title: job.title,
        description: job.description,
        company_id: job.company_id
      })
    } else {
      response = await api.create('jobs', {
        title: job.title,
        description: job.description,
        company_id: job.company_id
      })
    }

    dispatch({
      type: constants.SAVE_JOB_SUCCESS,
      job: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.SAVE_JOB_FAILURE,
      errorMessage: error
    })
  }
}

export const fetchJob = id => async dispatch => {
  dispatch({
    type: constants.FETCH_JOB_REQUEST,
    id
  })

  try {
    const response = await api.fetch(`jobs/${id}`)

    dispatch({
      type: constants.FETCH_JOB_SUCCESS,
      job: response.data
    })
  } catch (error) {
    dispatch({
      type: constants.FETCH_JOB_FAILURE,
      errorMessage: error
    })
  }
}

export const updateJob = (key, value) => dispatch => {
  dispatch({
    type: constants.UPDATE_JOB,
    key,
    value
  })
}

export const resetJob = () => dispatch => {
  dispatch({
    type: constants.RESET_JOB
  })
}
