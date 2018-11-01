import reducer from '../companies'
import constants from '../../constants/companies'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    },
    search: ''
  })
})

it('handles FETCH_COMPANIES_REQUEST', () => {
  const prevState = {
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_REQUEST
  })

  expect(nextState).toEqual({
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_COMPANIES_SUCCESS', () => {
  const prevState = {
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_SUCCESS,
    companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
    'totalPages': 10
  })

  expect(nextState).toEqual({
    companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
    currentPage: 1,
    totalPages: 10,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  })
})

it('handles FETCH_COMPANIES_FAILURE', () => {
  const prevState = {
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANIES_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: 'Not Found'
    }
  })
})

it('handles UPDATE_CURRENT_PAGE', () => {
  const prevState = {
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.UPDATE_CURRENT_PAGE,
    page: 2
  })

  expect(nextState).toEqual({
    companies: [],
    currentPage: 2,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles RESET_COMPANIES', () => {
  const prevState = {
    companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
    currentPage: 1,
    totalPages: 10,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    },
    search: ''
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_COMPANIES
  })

  expect(nextState).toEqual({
    companies: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    },
    search: ''
  })
})

it('handles UPDATE_COMPANIES_SEARCH', () => {
  const prevState = {
    companies: [],
    currentPage: 1,
    totalPages: 1,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    },
    search: ''
  }

  const nextState = reducer(prevState, {
    type: constants.UPDATE_COMPANIES_SEARCH,
    search: 'John Doe'
  })

  expect(nextState).toEqual({
    companies: [],
    currentPage: 1,
    totalPages: 1,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    },
    search: 'John Doe'
  })
})
