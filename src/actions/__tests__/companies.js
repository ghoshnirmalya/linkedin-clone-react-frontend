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
      const fetchSpy = jest.spyOn(api, 'get').mockReturnValue({
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
        ]
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
          ]
        }
      ]
      const store = mockStore({
        locks: {},
        ui: {
          loading: false,
          doneLoading: false,
          loadError: ''
        }
      })

      await store.dispatch(actions.fetchCompanies())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies')

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
        locks: {},
        ui: {
          loading: false,
          doneLoading: false,
          loadError: 'Not Found'
        }
      })

      await store.dispatch(actions.fetchCompanies())

      expect(store.getActions()).toEqual(expectedActions)
      expect(fetchSpy).toHaveBeenCalledWith('companies')

      fetchSpy.mockRestore()
    })
  })
})
