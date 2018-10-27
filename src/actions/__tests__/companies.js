import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../companies'
import constants from '../../constants/companies'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchCompanies', () => {
  describe('on success', () => {
    it('dispatches FETCH_COMPANIES_REQUEST & FETCH_COMPANIES_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'get')
        .mockReturnValue({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Company A'
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Company B'
              }
            }
          ],
          links: {
            last: 'http://localhost:3000/v1/companies?page%5Bnumber%5D=10&page%5Bsize%5D=10'
          }
        })
      const expectedActions = [
        {
          type: constants.FETCH_COMPANIES_REQUEST
        },
        {
          type: constants.FETCH_COMPANIES_SUCCESS,
          companies: [
            {
              id: 1,
              attributes: {
                name: 'Company A'
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Company B'
              }
            }
          ],
          'totalPages': 10
        }
      ]
      const store = mockStore({
        companies: {
          companies: {},
          currentPage: 1,
          totalPages: 0,
          ui: {
            fetching: false,
            doneFetching: false,
            fetchError: ''
          }
        }
      })

      await store.dispatch(actions.fetchCompanies())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies', { page: 1 })

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches FETCH_COMPANIES_REQUEST & FETCH_COMPANIES_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'get')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.FETCH_COMPANIES_REQUEST
        },
        {
          type: constants.FETCH_COMPANIES_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        companies: {
          companies: {},
          currentPage: 1,
          totalPages: 0,
          ui: {
            fetching: false,
            doneFetching: false,
            fetchError: 'Not Found'
          }
        }
      })

      await store.dispatch(actions.fetchCompanies())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies', { page: 1 })

      fetchSpy.mockRestore()
    })
  })
})

describe('resetCompanies', () => {
  it('dispatches RESET_COMPANIES', () => {
    const expectedActions = [{ type: constants.RESET_COMPANIES }]

    const store = mockStore({
      companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
      currentPage: 1,
      totalPages: 10,
      ui: {
        fetching: false,
        doneFetching: true,
        fetchError: ''
      }
    })

    store.dispatch(actions.resetCompanies())

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
      companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
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
  it('dispatches UPDATE_COMPANIES_SEARCH', () => {
    const expectedActions = [
      {
        type: constants.UPDATE_COMPANIES_SEARCH,
        search: 'John Doe'
      }
    ]

    const store = mockStore({
      companies: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
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
