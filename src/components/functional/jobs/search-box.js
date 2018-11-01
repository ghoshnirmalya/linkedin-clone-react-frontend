import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

class SearchBox extends Component {
  render () {
    return (
      <Input.Search
        placeholder='Search for jobs and press enter...'
        enterButton='Search'
        size='large'
        onSearch={async search => {
          this.props.updateSearch(search)
          this.props.updateCurrentPage()
          await this.props.fetchJobs()
        }}
        style={{ marginBottom: '24px' }}
      />
    )
  }
}

SearchBox.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired,
  updateCurrentPage: PropTypes.func.isRequired
}

export default SearchBox
