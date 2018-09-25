import reducer from '../users'
import constants from '../../constants/users'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    users: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  })
})

it('handles FETCH_USERS_REQUEST', () => {
  const prevState = {
    users: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USERS_REQUEST
  })

  expect(nextState).toEqual({
    users: {},
    ui: {
      loading: true,
      doneLoading: false,
      loadError: ''
    }
  })
})

it('handles FETCH_USERS_SUCCESS', () => {
  const prevState = {
    users: {},
    ui: {
      loading: true,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USERS_SUCCESS,
    users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
  })

  expect(nextState).toEqual({
    users: { '1': { id: 1, name: 'John Doe' }, '2': { id: 2, name: 'Jane Doe' } },
    ui: {
      loading: false,
      doneLoading: true,
      loadError: ''
    }
  })
})

it('handles FETCH_USERS_FAILURE', () => {
  const prevState = {
    users: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_USERS_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    users: {},
    ui: {
      loading: false,
      doneLoading: false,
      loadError: 'Not Found'
    }
  })
})
