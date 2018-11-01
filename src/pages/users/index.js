import React, { Component, Fragment } from 'react'

import List from '../../containers/users/list'
import Pagination from '../../containers/users/pagination'
import SearchBox from '../../containers/users/search-box'

class UsersPage extends Component {
  render () {
    return (
      <Fragment>
        <SearchBox />
        <List />
        <Pagination />
      </Fragment>
    )
  }
}

export default UsersPage
