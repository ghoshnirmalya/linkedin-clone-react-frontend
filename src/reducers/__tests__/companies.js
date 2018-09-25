import reducer from '../companies'
import constants from '../../constants/companies'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    companies: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  })
})

it('handles FETCH_COMPANIES_REQUEST', () => {
  const prevState = {
    companies: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_REQUEST
  })

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
    companies: {},
    ui: {
      loading: true,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_SUCCESS,
    companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
  })

  expect(nextState).toEqual({
    companies: { '1': { id: 1, name: 'John Doe' }, '2': { id: 2, name: 'Jane Doe' } },
    ui: {
      loading: false,
      doneLoading: true,
      loadError: ''
    }
  })
})

it('handles FETCH_COMPANIES_FAILURE', () => {
  const prevState = {
    companies: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    companies: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: 'Not Found'
    }
  })
})
