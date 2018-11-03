import React, { Component, Fragment } from 'react'

import List from '../../containers/jobs/list'
import Pagination from '../../containers/jobs/pagination'
import SearchBox from '../../containers/jobs/search-box'

class JobsPage extends Component {
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

export default JobsPage
