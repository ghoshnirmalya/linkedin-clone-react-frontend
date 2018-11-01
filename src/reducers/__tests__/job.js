import reducer from '../job'
import constants from '../../constants/job'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    job: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: '',
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles SAVE_JOB_REQUEST', () => {
  const prevState = {
    job: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.SAVE_JOB_REQUEST
  })

  expect(nextState).toEqual({
    job: {},
    ui: {
      saving: true,
      doneSaving: false,
      saveError: ''
    }
  })
})

it('handles SAVE_JOB_SUCCESS', () => {
  const prevState = {
    job: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.SAVE_JOB_SUCCESS,
    job: { id: 1, name: 'Job A' }
  })

  expect(nextState).toEqual({
    'job': { 'id': 1, 'name': 'Job A' },
    ui: {
      saving: false,
      doneSaving: true,
      saveError: ''
    }
  })
})

it('handles SAVE_JOB_FAILURE', () => {
  const prevState = {
    job: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.SAVE_JOB_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    job: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: 'Not Found'
    }
  })
})

it('handles FETCH_JOB_REQUEST', () => {
  const prevState = {
    job: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_JOB_REQUEST
  })

  expect(nextState).toEqual({
    job: {},
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_JOB_SUCCESS', () => {
  const prevState = {
    job: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_JOB_SUCCESS,
    job: { id: 1, name: 'Job A' }
  })

  expect(nextState).toEqual({
    'job': { 'id': 1, 'name': 'Job A' },
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  })
})

it('handles FETCH_JOB_FAILURE', () => {
  const prevState = {
    job: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_JOB_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    job: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: 'Not Found'
    }
  })
})

it('handles RESET_JOB', () => {
  const prevState = {
    job: {
      id: 1, name: 'John Doe'
    },
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_JOB
  })

  expect(nextState).toEqual({
    job: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: '',
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles UPDATE_JOB', () => {
  const prevState = {
    job: {
      id: 1, name: 'Job A'
    },
    ui: {
      saving: false,
      doneSaving: false,
      saveError: '',
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.UPDATE_JOB,
    key: 'name',
    value: 'Job B'
  })

  expect(nextState).toEqual({
    job: {
      id: 1,
      name: 'Job B'
    },
    ui: {
      saving: false,
      doneSaving: false,
      saveError: '',
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})
