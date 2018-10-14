import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../company'
import constants from '../../constants/company'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('saveCompany', () => {
  it('does a POST request if id is not present in state', async () => {
    const fetchSpy = jest
      .spyOn(api, 'create')
      .mockReturnValue({
        data: {
          name: 'Company A'
        }
      })
    const expectedActions = [
      {
        type: constants.SAVE_COMPANY_REQUEST,
        company: {
          name: 'Company A'
        }
      },
      {
        type: constants.SAVE_COMPANY_SUCCESS,
        company: {
          name: 'Company A'
        }
      }
    ]
    const store = mockStore({
      company: {
        company: {
          name: 'Company A'
        },
        ui: {
          saving: false,
          doneSaving: false,
          saveError: ''
        }
      }
    })

    await store.dispatch(actions.saveCompany({ name: 'Company A' }))

    expect(store.getActions()).toEqual(expectedActions)
    expect(fetchSpy).toHaveBeenCalledWith('companies', { 'name': 'Company A' })

    fetchSpy.mockRestore()
  })

  it('does a PATCH request if id is not present in state', async () => {
    const fetchSpy = jest
      .spyOn(api, 'update')
      .mockReturnValue({
        data: {
          id: 1,
          name: 'Company A'
        }
      })
    const expectedActions = [
      {
        type: constants.SAVE_COMPANY_REQUEST,
        company: {
          id: 1,
          name: 'Company A'
        }
      },
      {
        type: constants.SAVE_COMPANY_SUCCESS,
        company: {
          id: 1,
          name: 'Company A'
        }
      }
    ]
    const store = mockStore({
      company: {
        company: {
          id: 1,
          name: 'Company A'
        },
        ui: {
          saving: false,
          doneSaving: false,
          saveError: ''
        }
      }
    })

    await store.dispatch(actions.saveCompany({ name: 'Company A' }))

    expect(store.getActions()).toEqual(expectedActions)
    expect(fetchSpy).toHaveBeenCalledWith('companies', { id: 1, 'name': 'Company A' })

    fetchSpy.mockRestore()
  })

  describe('on success', () => {
    it('dispatches SAVE_COMPANY_REQUEST & SAVE_COMPANY_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'create')
        .mockReturnValue({
          data: {
            name: 'Company A'
          }
        })
      const expectedActions = [
        {
          type: constants.SAVE_COMPANY_REQUEST,
          company: {
            name: 'Company A'
          }
        },
        {
          type: constants.SAVE_COMPANY_SUCCESS,
          company: {
            name: 'Company A'
          }
        }
      ]
      const store = mockStore({
        company: {
          company: {
            name: 'Company A'
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.saveCompany({ name: 'Company A' }))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies', { 'name': 'Company A' })

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches SAVE_COMPANY_REQUEST & SAVE_COMPANY_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'create')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.SAVE_COMPANY_REQUEST,
          company: {
            name: 'Company A'
          }
        },
        {
          type: constants.SAVE_COMPANY_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        company: {
          company: {
            name: 'Company A'
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.saveCompany({ name: 'Company A' }))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies', {
        name: 'Company A'
      })

      fetchSpy.mockRestore()
    })
  })
})

describe('fetchCompany', () => {
  describe('on success', () => {
    it('dispatches FETCH_COMPANY_REQUEST & FETCH_COMPANY_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'fetch')
        .mockReturnValue({
          data: {
            name: 'Company A'
          }
        })
      const expectedActions = [
        {
          type: constants.FETCH_COMPANY_REQUEST,
          id: 1
        },
        {
          type: constants.FETCH_COMPANY_SUCCESS,
          company: {
            name: 'Company A'
          }
        }
      ]
      const store = mockStore({
        company: {
          company: {
            name: 'Company A'
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.fetchCompany(1))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies/1')

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches FETCH_COMPANY_REQUEST & FETCH_COMPANY_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'fetch')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.FETCH_COMPANY_REQUEST,
          id: 1
        },
        {
          type: constants.FETCH_COMPANY_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        company: {
          company: {},
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.fetchCompany(1))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies/1')

      fetchSpy.mockRestore()
    })
  })
})

describe('resetCompany', () => {
  it('dispatches RESET_COMPANY', () => {
    const expectedActions = [{ type: constants.RESET_COMPANY }]

    const store = mockStore({
      company: {
        name: 'Company A'
      },
      ui: {
        saving: false,
        doneSaving: false,
        saveError: ''
      }
    })

    store.dispatch(actions.resetCompany())

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('updateCompany', () => {
  it('dispatches UPDATE_COMPANY', () => {
    const expectedActions = [{ type: constants.UPDATE_COMPANY, key: 'name', value: 'Company A' }]

    const store = mockStore({
      company: {
        name: 'Company A'
      },
      ui: {
        saving: false,
        doneSaving: false,
        saveError: ''
      }
    })

    store.dispatch(actions.updateCompany('name', 'Company A'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
