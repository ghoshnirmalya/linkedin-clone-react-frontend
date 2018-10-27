import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../users'
import constants from '../../constants/users'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchUsers', () => {
  describe('on success', () => {
    it('dispatches FETCH_USERS_REQUEST & FETCH_USERS_SUCCESS', async () => {
      const fetchSpy = jest
        .spyOn(api, 'get')
        .mockReturnValue({
          data: [{
            id: 1,
            attributes: {
              name: 'John Doe',
              email: 'john@doe.com'
            }
          }, {
            id: 2,
            attributes: {
              name: 'Jane Doe',
              email: 'jane@doe.com'
            }
          }],
          links: {
            last: 'http://localhost:3000/v1/users?page%5Bnumber%5D=10&page%5Bsize%5D=10'
          }
        })
      const expectedActions = [{
        type: constants.FETCH_USERS_REQUEST
      }, {
        type: constants.FETCH_USERS_SUCCESS,
        users: [{
          id: 1,
          attributes: {
            name: 'John Doe',
            email: 'john@doe.com'
          }
        }, {
          id: 2,
          attributes: {
            name: 'Jane Doe',
            email: 'jane@doe.com'
          }
        }],
        'totalPages': 10
      }]

      const store = mockStore({
        users: {
          users: {},
          currentPage: 1,
          totalPages: 0,
          ui: {
            fetching: false,
            doneFetching: false,
            fetchError: ''
          }
        }
      })

      await store.dispatch(actions.fetchUsers())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('users', { page: 1 })

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches FETCH_USERS_REQUEST & FETCH_USERS_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'get')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.FETCH_USERS_REQUEST
        },
        {
          type: constants.FETCH_USERS_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        users: {
          users: {},
          currentPage: 1,
          totalPages: 0,
          ui: {
            fetching: false,
            doneFetching: false,
            fetchError: 'Not Found'
          }
        }
      })

      await store.dispatch(actions.fetchUsers())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('users', { page: 1 })

      fetchSpy.mockRestore()
    })
  })
})

describe('resetUsers', () => {
  it('dispatches RESET_USERS', () => {
    const expectedActions = [{ type: constants.RESET_USERS }]

    const store = mockStore({
      users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
      currentPage: 1,
      totalPages: 10,
      ui: {
        fetching: false,
        doneFetching: true,
        fetchError: ''
      }
    })

    store.dispatch(actions.resetUsers())

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
      users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
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
  it('dispatches UPDATE_USERS_SEARCH', () => {
    const expectedActions = [
      {
        type: constants.UPDATE_USERS_SEARCH,
        search: 'John Doe'
      }
    ]

    const store = mockStore({
      users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
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
