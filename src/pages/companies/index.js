import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import List from '../../containers/companies/list'
import Pagination from '../../containers/companies/pagination'
import SearchBox from '../../containers/companies/search-box'

class CompaniesPage extends Component {
  render () {
    return (
      <Fragment>
        <div style={{ display: 'flex', marginBottom: '24px', justifyContent: 'flex-end' }}>
          <Link to='/companies/new'>
            <Button type='primary' size='large'>
              Add a new company
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

export default CompaniesPage
