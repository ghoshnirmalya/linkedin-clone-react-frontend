import Kitsu from 'kitsu'

import TokenStore from './token-store'

const api = new Kitsu({
  baseURL: `${process.env.REACT_APP_API_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.api+json',
    Authorization: TokenStore.apiToken
  }
})

export default api
