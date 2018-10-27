import React, { Component, Fragment } from 'react'

import List from '../../containers/users/list'
import SearchBox from '../../containers/users/search-box'

class UsersPage extends Component {
  render () {
    return (
      <Fragment>
        <SearchBox />
        <List />
      </Fragment>
    )
  }
}

export default UsersPage
