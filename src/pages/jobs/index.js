import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import List from '../../containers/jobs/list'
import Pagination from '../../containers/jobs/pagination'
import SearchBox from '../../containers/jobs/search-box'

class JobsPage extends Component {
  render () {
    return (
      <Fragment>
        <div style={{ display: 'flex', marginBottom: '24px', justifyContent: 'flex-end' }}>
          <Link to='/jobs/new'>
            <Button type='primary' size='large'>
              Add a new job
            </Button>
          </Link>
        </div>
        <SearchBox />
        <List />
        <Pagination />
      </Fragment>
    )
  }
}

export default JobsPage
