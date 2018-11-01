import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'

class JobsPagination extends Component {
  render = () => (
    <Pagination
      current={this.props.currentPage}
      defaultCurrent={this.props.currentPage}
      total={this.props.totalRecords}
      onChange={page => {
        this.props.updateCurrentPage(page)
        this.props.fetchJobs()
      }}
    />
  );
}

JobsPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  updateCurrentPage: PropTypes.func.isRequired,
  fetchJobs: PropTypes.func.isRequired
}

export default JobsPagination
