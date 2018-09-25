import reducer from '../auth'
import constants from '../../constants/auth'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  })
})

it('handles AUTH_REQUEST', () => {
  const prevState = {
    companies: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, { type: constants.AUTH_REQUEST })

  expect(nextState).toEqual({
    companies: {},
    ui: {
      loading: true,
      doneLoading: false,
      loadError: ''
    }
  })
})

it('handles FETCH_COMPANIES_SUCCESS', () => {
  const prevState = {
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.AUTH_SUCCESS
  })

  expect(nextState).toEqual({
    ui: {
      loading: false,
      doneLoading: true,
      loadError: ''
    }
  })
})

it('handles AUTH_FAILURE', () => {
  const prevState = {
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.AUTH_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    ui: {
      loading: false,
      doneLoading: false,
      loadError: 'Not Found'
    }
  })
})
