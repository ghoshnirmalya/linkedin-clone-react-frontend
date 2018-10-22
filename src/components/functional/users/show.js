import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, List, Row, Col } from 'antd'

class ShowUserForm extends Component {
  componentDidMount () {
    this.props.fetchUser(this.props.id)
  }

  componentWillUnmount = () => {
    this.props.resetUser()
  };

  companiesNode = () => {
    return (
      <Card
        loading={this.props.userUI.fetching}
        title='Companies'
        style={{ marginTop: '24px' }}
      >
        <List
          grid={{ gutter: 24 }}
          dataSource={this.props.user.companies}
          renderItem={company => (
            <List.Item>
              <Card
                type='inner'
                title={company.title}
              >
                {company.description}
              </Card>
            </List.Item>
          )}
          locale={{
            emptyText: 'No companies are associated with this user!'
          }}
        />
      </Card>
    )
  };

  render () {
    return (
      <Fragment>
        <Card
          loading={this.props.userUI.fetching}
          actions={[
            <Fragment>
              <Icon type='link' theme='outlined' /> {window.location.href}
            </Fragment>,
            <Fragment>
              <Icon type='mail' theme='outlined' /> {this.props.user.email}
            </Fragment>
          ]}
        >
          <Card.Meta title={this.props.user.name} />
        </Card>
        <Row gutter={24}>
          <Col span={14}>
            {this.companiesNode()}
          </Col>
        </Row>
      </Fragment>
    )
  }
}

ShowUserForm.propTypes = {
  user: PropTypes.object,
  userUI: PropTypes.object,
  fetchUser: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired
}

export default ShowUserForm
