import reducer from '../user'
import constants from '../../constants/user'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    user: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_USER_REQUEST', () => {
  const prevState = {
    user: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USER_REQUEST
  })

  expect(nextState).toEqual({
    user: {},
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_USER_SUCCESS', () => {
  const prevState = {
    user: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USER_SUCCESS,
    user: { id: 1, name: 'User A' }
  })

  expect(nextState).toEqual({
    user: { id: 1, name: 'User A' },
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  })
})

it('handles FETCH_USER_FAILURE', () => {
  const prevState = {
    user: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USER_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    user: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: 'Not Found'
    }
  })
})

it('handles RESET_USER', () => {
  const prevState = {
    user: {
      id: 1,
      name: 'John Doe'
    },
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_USER
  })

  expect(nextState).toEqual({
    user: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})
