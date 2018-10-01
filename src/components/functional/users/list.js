import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Card, Button } from 'antd'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  loadMoreButtonNode = () => {
    if (this.props.totalPages === this.props.currentPage) return false

    return (
      <Button
        onClick={() => this.handleUpdateCurrentPage()}
        disabled={this.props.usersUI.loading}
      >
        Load more
      </Button>
    )
  };

  handleUpdateCurrentPage = () => {
    this.props.updateCurrentPage(this.props.currentPage + 1)
    this.props.fetchUsers()
  };

  componentWillUnmount = () => {
    this.props.resetUsers()
  };

  render () {
    return (
      <List
        loading={this.props.usersUI.loading}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={this.props.users}
        loadMore={this.loadMoreButtonNode()}
        renderItem={item => (
          <List.Item>
            <Card title={item.name} hoverable bordered={false}>
              {item.email}
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

UsersList.propTypes = {
  usersUI: PropTypes.object,
  fetchUsers: PropTypes.func.isRequired,
  resetUsers: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default UsersList
