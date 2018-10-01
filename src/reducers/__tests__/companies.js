import reducer from '../companies'
import constants from '../../constants/companies'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    companies: {},
    currentPage: 1,
    totalPages: 0,
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
    currentPage: 1,
    totalPages: 0,
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
    currentPage: 1,
    totalPages: 0,
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
    currentPage: 1,
    totalPages: 0,
    ui: {
      loading: true,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_SUCCESS,
    companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
    'totalPages': 10
  })

  expect(nextState).toEqual({
    companies: {
      '1': { id: 1, name: 'John Doe' },
      '2': { id: 2, name: 'Jane Doe' }
    },
    currentPage: 1,
    totalPages: 10,
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
    currentPage: 1,
    totalPages: 0,
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
    currentPage: 1,
    totalPages: 0,
    ui: {
      loading: false,
      doneLoading: false,
      loadError: 'Not Found'
    }
  })
})

it('handles UPDATE_CURRENT_PAGE', () => {
  const prevState = {
    companies: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.UPDATE_CURRENT_PAGE,
    page: 2
  })

  expect(nextState).toEqual({
    companies: {},
    currentPage: 2,
    totalPages: 0,
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  })
})

it('handles RESET_COMPANIES', () => {
  const prevState = {
    companies: {
      '1': { id: 1, name: 'John Doe' },
      '2': { id: 2, name: 'Jane Doe' }
    },
    currentPage: 1,
    totalPages: 10,
    ui: {
      loading: false,
      doneLoading: true,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_COMPANIES
  })

  expect(nextState).toEqual({
    companies: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  })
})
