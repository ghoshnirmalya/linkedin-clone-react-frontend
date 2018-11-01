import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../job'
import constants from '../../constants/job'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('saveJob', () => {
  it('does a POST request if id is not present in state', async () => {
    const fetchSpy = jest
      .spyOn(api, 'create')
      .mockReturnValue({
        data: {
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        }
      })
    const expectedActions = [
      {
        type: constants.SAVE_JOB_REQUEST,
        job: {
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        }
      },
      {
        type: constants.SAVE_JOB_SUCCESS,
        job: {
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        }
      }
    ]
    const store = mockStore({
      job: {
        job: {
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        },
        ui: {
          saving: false,
          doneSaving: false,
          saveError: ''
        }
      }
    })

    await store.dispatch(actions.saveJob({
      title: 'Job A',
      description: 'Some description',
      company_id: 1
    }))

    expect(store.getActions()).toEqual(expectedActions)
    expect(fetchSpy).toHaveBeenCalledWith('jobs', {
      title: 'Job A',
      description: 'Some description',
      company_id: 1
    })

    fetchSpy.mockRestore()
  })

  it('does a PATCH request if id is not present in state', async () => {
    const fetchSpy = jest
      .spyOn(api, 'update')
      .mockReturnValue({
        data: {
          id: 1,
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        }
      })
    const expectedActions = [
      {
        type: constants.SAVE_JOB_REQUEST,
        job: {
          id: 1,
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        }
      },
      {
        type: constants.SAVE_JOB_SUCCESS,
        job: {
          id: 1,
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        }
      }
    ]
    const store = mockStore({
      job: {
        job: {
          id: 1,
          title: 'Job A',
          description: 'Some description',
          company_id: 1
        },
        ui: {
          saving: false,
          doneSaving: false,
          saveError: ''
        }
      }
    })

    await store.dispatch(actions.saveJob({
      title: 'Job A',
      description: 'Some description',
      company_id: 1
    }))

    expect(store.getActions()).toEqual(expectedActions)
    expect(fetchSpy).toHaveBeenCalledWith('jobs', {
      id: 1,
      title: 'Job A',
      description: 'Some description',
      company_id: 1
    })

    fetchSpy.mockRestore()
  })

  describe('on success', () => {
    it('dispatches SAVE_JOB_REQUEST & SAVE_JOB_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'create')
        .mockReturnValue({
          data: {
            title: 'Job A',
            description: 'Some description',
            company_id: 1
          }
        })
      const expectedActions = [
        {
          type: constants.SAVE_JOB_REQUEST,
          job: {
            title: 'Job A',
            description: 'Some description',
            company_id: 1
          }
        },
        {
          type: constants.SAVE_JOB_SUCCESS,
          job: {
            title: 'Job A',
            description: 'Some description',
            company_id: 1
          }
        }
      ]
      const store = mockStore({
        job: {
          job: {
            title: 'Job A',
            description: 'Some description',
            company_id: 1
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.saveJob({
        title: 'Job A',
        description: 'Some description',
        company_id: 1
      }))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('jobs', {
        title: 'Job A',
        description: 'Some description',
        company_id: 1
      })

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches SAVE_JOB_REQUEST & SAVE_JOB_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'create')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.SAVE_JOB_REQUEST,
          job: {
            title: 'Job A',
            description: 'Some description',
            company_id: 1
          }
        },
        {
          type: constants.SAVE_JOB_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        job: {
          job: {
            title: 'Job A',
            description: 'Some description',
            company_id: 1
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.saveJob({
        title: 'Job A',
        description: 'Some description',
        company_id: 1
      }))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('jobs', {
        title: 'Job A',
        description: 'Some description',
        company_id: 1
      })

      fetchSpy.mockRestore()
    })
  })
})

describe('fetchJob', () => {
  describe('on success', () => {
    it('dispatches FETCH_JOB_REQUEST & FETCH_JOB_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'fetch')
        .mockReturnValue({
          data: {
            title: 'Job A'
          }
        })
      const expectedActions = [
        {
          type: constants.FETCH_JOB_REQUEST,
          id: 1
        },
        {
          type: constants.FETCH_JOB_SUCCESS,
          job: {
            title: 'Job A'
          }
        }
      ]
      const store = mockStore({
        job: {
          job: {
            title: 'Job A'
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.fetchJob(1))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('jobs/1')

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches FETCH_JOB_REQUEST & FETCH_JOB_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'fetch')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.FETCH_JOB_REQUEST,
          id: 1
        },
        {
          type: constants.FETCH_JOB_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        job: {
          job: {},
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.fetchJob(1))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('jobs/1')

      fetchSpy.mockRestore()
    })
  })
})

describe('resetJob', () => {
  it('dispatches RESET_JOB', () => {
    const expectedActions = [{ type: constants.RESET_JOB }]

    const store = mockStore({
      job: {
        title: 'Job A'
      },
      ui: {
        saving: false,
        doneSaving: false,
        saveError: ''
      }
    })

    store.dispatch(actions.resetJob())

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('updateJob', () => {
  it('dispatches UPDATE_JOB', () => {
    const expectedActions = [{ type: constants.UPDATE_JOB, key: 'title', value: 'Job A' }]

    const store = mockStore({
      job: {
        title: 'Job A'
      },
      ui: {
        saving: false,
        doneSaving: false,
        saveError: ''
      }
    })

    store.dispatch(actions.updateJob('title', 'Job A'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
