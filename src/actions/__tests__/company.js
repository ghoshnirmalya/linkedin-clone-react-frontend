import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../company'
import constants from '../../constants/company'
import api from '../../lib/kitsu'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('saveCompany', () => {
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
          company: {},
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
          company: {},
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
