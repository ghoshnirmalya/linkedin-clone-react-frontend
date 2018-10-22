import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../user'
import constants from '../../constants/user'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchUser', () => {
  describe('on success', () => {
    it('dispatches FETCH_USER_REQUEST & FETCH_USER_SUCCESS', async () => {
      const fetchSpy = jest.spyOn(api, 'fetch').mockReturnValue({
        data: {
          name: 'User A'
        }
      })
      const expectedActions = [
        {
          type: constants.FETCH_USER_REQUEST,
          id: 1
        },
        {
          type: constants.FETCH_USER_SUCCESS,
          user: {
            name: 'User A'
          }
        }
      ]
      const store = mockStore({
        user: {
          user: {
            name: 'User A'
          },
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.fetchUser(1))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('users/1')

      fetchSpy.mockRestore()
    })
  })

  describe('on failure', () => {
    it('dispatches FETCH_USER_REQUEST & FETCH_USER_FAILURE', async () => {
      const fetchSpy = jest
        .spyOn(api, 'fetch')
        .mockImplementation(() => Promise.reject(new Error('Not Found')))

      const expectedActions = [
        {
          type: constants.FETCH_USER_REQUEST,
          id: 1
        },
        {
          type: constants.FETCH_USER_FAILURE,
          errorMessage: new Error('Not Found')
        }
      ]

      const store = mockStore({
        user: {
          user: {},
          ui: {
            saving: false,
            doneSaving: false,
            saveError: ''
          }
        }
      })

      await store.dispatch(actions.fetchUser(1))

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('users/1')

      fetchSpy.mockRestore()
    })
  })
})

describe('resetUser', () => {
  it('dispatches RESET_USER', () => {
    const expectedActions = [{ type: constants.RESET_USER }]

    const store = mockStore({
      user: {
        name: 'User A'
      },
      ui: {
        saving: false,
        doneSaving: false,
        saveError: ''
      }
    })

    store.dispatch(actions.resetUser())

    expect(store.getActions()).toEqual(expectedActions)
  })
})
