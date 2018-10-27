import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Card, Button } from 'antd'
import { Link } from 'react-router-dom'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  loadMoreButtonNode = () => {
    if ((this.props.totalPages === this.props.currentPage) || this.props.usersUI.fetching) return false

    return (
      <Button
        onClick={() => this.handleUpdateCurrentPage()}
        disabled={this.props.usersUI.fetching}
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
        loading={this.props.usersUI.fetching}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={this.props.users}
        loadMore={this.loadMoreButtonNode()}
        renderItem={item => (
          <List.Item>
            <Link to={`/users/${item.id}`}>
              <Card title={item.name} hoverable bordered={false}>
                {item.email}
              </Card>
            </Link>
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
