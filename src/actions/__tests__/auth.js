import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../auth'
import constants from '../../constants/auth'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('signIn()', () => {
  describe('on success', () => {
    it('dispatches AUTH_REQUEST, AUTH_SUCCESS', () => {
      const mockResponse = Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            auth_token: 'some_random_token'
          })
      })
      const fetchSpy = jest
        .spyOn(window, 'fetch')
        .mockReturnValue(mockResponse)
      const expectedActions = [
        { type: constants.AUTH_REQUEST },
        { type: constants.AUTH_SUCCESS }
      ]
      const store = mockStore({
        ui: {
          loading: false,
          doneLoading: false,
          loadError: ''
        }
      })

      return store.dispatch(actions.signIn({
        email: 'john@doe.com',
        password: 'password'
      })).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        expect(fetchSpy).toHaveBeenCalledWith(
          `${process.env.REACT_APP_API_URL}/v1/auth/sign_in`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/vnd.api+json',
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              data: {
                type: 'users',
                attributes: {
                  email: 'john@doe.com',
                  password: 'password'
                }
              }
            })
          }
        )

        fetchSpy.mockRestore()
      })
    })
  })

  describe('on failure', () => {
    it('dispatches AUTH_REQUEST, AUTH_FAILURE', () => {
      const mockResponse = Promise.resolve({
        ok: false,
        statusText: 'Not Found'
      })
      const fetchSpy = jest
        .spyOn(window, 'fetch')
        .mockReturnValue(mockResponse)
      const expectedActions = [
        { type: constants.AUTH_REQUEST },
        { type: constants.AUTH_FAILURE, errorMessage: 'Not Found' }
      ]
      const store = mockStore({
        ui: {
          loading: false,
          doneLoading: false,
          loadError: ''
        }
      })

      return store.dispatch(actions.signIn({
        email: 'john@doe.com',
        password: 'password'
      })).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        expect(fetchSpy).toHaveBeenCalledWith(
          `${process.env.REACT_APP_API_URL}/v1/auth/sign_in`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/vnd.api+json',
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              data: {
                type: 'users',
                attributes: {
                  email: 'john@doe.com',
                  password: 'password'
                }
              }
            })
          }
        )

        fetchSpy.mockRestore()
      })
    })
  })
})
