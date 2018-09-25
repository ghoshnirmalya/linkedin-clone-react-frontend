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
          }]
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
        }]
      }]
      const store = mockStore({
        locks: {},
        ui: {
          loading: false,
          doneLoading: false,
          loadError: ''
        }
      })

      await store.dispatch(actions.fetchUsers())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('users')

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
        locks: {},
        ui: {
          loading: false,
          doneLoading: false,
          loadError: 'Not Found'
        }
      })

      await store.dispatch(actions.fetchUsers())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('users')

      fetchSpy.mockRestore()
    })
  })
})
