import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'

class UsersPagination extends Component {
  render = () => (
    <Pagination
      current={this.props.currentPage}
      defaultCurrent={this.props.currentPage}
      total={this.props.totalRecords}
      onChange={page => {
        this.props.updateCurrentPage(page)
        this.props.fetchUsers()
      }}
    />
  );
}

UsersPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  updateCurrentPage: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

export default UsersPagination
