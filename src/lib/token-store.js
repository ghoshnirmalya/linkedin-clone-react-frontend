export default class TokenStore {
  static set apiToken (token) {
    localStorage.setItem('API-TOKEN', token)
  }

  static get apiToken () {
    return localStorage.getItem('API-TOKEN')
  }

  static clear () {
    localStorage.removeItem('API-TOKEN')
  }
}
