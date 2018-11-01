import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../jobs'
import constants from '../../constants/jobs'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchJobs', () => {
  describe('on success', () => {
    it('dispatches FETCH_JOBS_REQUEST & FETCH_JOBS_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'get')
        .mockReturnValue({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Job A'
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Job B'
              }
            }
          ],
          links: {
            last: 'http://localhost:3000/v1/jobs?page%5Bnumber%5D=10&page%5Bsize%5D=10'
          }
        })
      const expectedActions = [
        {
          type: constants.FETCH_JOBS_REQUEST
        },
        {
          type: constants.FETCH_JOBS_SUCCESS,
          jobs: [
            {
              id: 1,
              attributes: {
                name: 'Job A'
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Job B'
              }
            }
          ],
          'totalPages': 10
        }
      ]
      const store = mockStore({
        jobs: {
          jobs: {},
          currentPage: 1,
          totalPages: 0,
          ui: {
            fetching: false,
            doneFetching: false,
            fetchError: ''
          }
        }
      })

      await store.dispatch(actions.fetchJobs())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('jobs', { page: 1 })

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches FETCH_JOBS_REQUEST & FETCH_JOBS_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'get')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.FETCH_JOBS_REQUEST
        },
        {
          type: constants.FETCH_JOBS_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        jobs: {
          jobs: {},
          currentPage: 1,
          totalPages: 0,
          ui: {
            fetching: false,
            doneFetching: false,
            fetchError: 'Not Found'
          }
        }
      })

      await store.dispatch(actions.fetchJobs())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('jobs', { page: 1 })

      fetchSpy.mockRestore()
    })
  })
})

describe('resetJobs', () => {
  it('dispatches RESET_JOBS', () => {
    const expectedActions = [{ type: constants.RESET_JOBS }]

    const store = mockStore({
      jobs: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
      currentPage: 1,
      totalPages: 10,
      ui: {
        fetching: false,
        doneFetching: true,
        fetchError: ''
      }
    })

    store.dispatch(actions.resetJobs())

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('updateCurrentPage', () => {
  it('dispatches UPDATE_CURRENT_PAGE', () => {
    const expectedActions = [
      {
        type: constants.UPDATE_CURRENT_PAGE,
        page: 1
      }
    ]

    const store = mockStore({
      jobs: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
      currentPage: 1,
      totalPages: 10,
      ui: {
        fetching: false,
        doneFetching: true,
        fetchError: ''
      }
    })

    store.dispatch(actions.updateCurrentPage())

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('updateSearch', () => {
  it('dispatches UPDATE_JOBS_SEARCH', () => {
    const expectedActions = [
      {
        type: constants.UPDATE_JOBS_SEARCH,
        search: 'John Doe'
      }
    ]

    const store = mockStore({
      jobs: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
      currentPage: 1,
      totalPages: 10,
      ui: {
        fetching: false,
        doneFetching: true,
        fetchError: ''
      },
      search: ''
    })

    store.dispatch(actions.updateSearch('John Doe'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
