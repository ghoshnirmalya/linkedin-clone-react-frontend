import reducer from '../company'
import constants from '../../constants/company'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    company: {},
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

it('handles SAVE_COMPANY_REQUEST', () => {
  const prevState = {
    company: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.SAVE_COMPANY_REQUEST
  })

  expect(nextState).toEqual({
    company: {},
    ui: {
      saving: true,
      doneSaving: false,
      saveError: ''
    }
  })
})

it('handles SAVE_COMPANY_SUCCESS', () => {
  const prevState = {
    company: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.SAVE_COMPANY_SUCCESS,
    company: { id: 1, name: 'Company A' }
  })

  expect(nextState).toEqual({
    'company': { 'id': 1, 'name': 'Company A' },
    ui: {
      saving: false,
      doneSaving: true,
      saveError: ''
    }
  })
})

it('handles SAVE_COMPANY_FAILURE', () => {
  const prevState = {
    company: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.SAVE_COMPANY_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    company: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: 'Not Found'
    }
  })
})

it('handles FETCH_COMPANY_REQUEST', () => {
  const prevState = {
    company: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANY_REQUEST
  })

  expect(nextState).toEqual({
    company: {},
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_COMPANY_SUCCESS', () => {
  const prevState = {
    company: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANY_SUCCESS,
    company: { id: 1, name: 'Company A' }
  })

  expect(nextState).toEqual({
    'company': { 'id': 1, 'name': 'Company A' },
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  })
})

it('handles FETCH_COMPANY_FAILURE', () => {
  const prevState = {
    company: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_COMPANY_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    company: {},
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: 'Not Found'
    }
  })
})

it('handles RESET_COMPANY', () => {
  const prevState = {
    company: {
      id: 1, name: 'John Doe'
    },
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_COMPANY
  })

  expect(nextState).toEqual({
    company: {},
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

it('handles UPDATE_COMPANY', () => {
  const prevState = {
    company: {
      id: 1, name: 'Company A'
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
    type: constants.UPDATE_COMPANY,
    key: 'name',
    value: 'Company B'
  })

  expect(nextState).toEqual({
    company: {
      id: 1,
      name: 'Company B'
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
