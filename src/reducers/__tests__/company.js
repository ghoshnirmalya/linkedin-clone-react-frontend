import reducer from '../company'
import constants from '../../constants/company'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    company: {},
    ui: {
      saving: false,
      doneSaving: false,
      saveError: ''
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
