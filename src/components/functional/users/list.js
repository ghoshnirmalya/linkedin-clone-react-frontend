import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Card } from 'antd'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <List
        loading={this.props.userUI.loading}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={this.props.users}
        renderItem={item => (
          <List.Item>
            <Card title={item.name} hoverable>
              {item.email}
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

UsersList.propTypes = {
  userUI: PropTypes.object,
  fetchUsers: PropTypes.func
}

export default UsersList
