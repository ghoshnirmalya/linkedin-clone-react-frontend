const extractQueryStringFromUrl = (url = '', query) => {
  query = query.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + query + '=([^&#]*)')
  const results = regex.exec(url)

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export default extractQueryStringFromUrl
