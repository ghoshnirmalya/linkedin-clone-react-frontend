import reducer from '../users'
import constants from '../../constants/users'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    users: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_USERS_REQUEST', () => {
  const prevState = {
    users: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USERS_REQUEST
  })

  expect(nextState).toEqual({
    users: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_USERS_SUCCESS', () => {
  const prevState = {
    users: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USERS_SUCCESS,
    users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
    totalPages: 10
  })

  expect(nextState).toEqual({
    users: {
      '1': { id: 1, name: 'John Doe' },
      '2': { id: 2, name: 'Jane Doe' }
    },
    currentPage: 1,
    totalPages: 10,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  })
})

it('handles FETCH_USERS_FAILURE', () => {
  const prevState = {
    users: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USERS_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    users: {},
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
    users: {},
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
    users: {},
    currentPage: 2,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles RESET_USERS', () => {
  const prevState = {
    users: {
      '1': { id: 1, name: 'John Doe' },
      '2': { id: 2, name: 'Jane Doe' }
    },
    currentPage: 1,
    totalPages: 10,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_USERS
  })

  expect(nextState).toEqual({
    users: {},
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})
