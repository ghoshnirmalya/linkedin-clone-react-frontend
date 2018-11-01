import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, List, Row, Col, Tooltip, Button } from 'antd'
import { Link } from 'react-router-dom'

class ShowCompanyForm extends Component {
  componentDidMount () {
    this.props.fetchCompany(this.props.id)
  }

  componentWillUnmount = () => {
    this.props.resetCompany()
  };

  jobsNode = () => {
    return (
      <Card
        loading={this.props.companyUI.fetching}
        title='Jobs'
        extra={
          <Link to={`/companies/${this.props.id}/jobs/new`}>
            <Button type='primary'>
              Add a new job
            </Button>
          </Link>
        }
        style={{ marginTop: '24px' }}
      >
        <List
          grid={{ gutter: 24 }}
          dataSource={this.props.company.jobs}
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
            'emptyText': 'No jobs are associated with this company!'
          }}
        />
      </Card>
    )
  }

  usersNode = () => {
    return (
      <Card
        loading={this.props.companyUI.fetching}
        title='Users'
        style={{ marginTop: '24px' }}
      >
        <List
          grid={{ gutter: 24 }}
          dataSource={this.props.company.users}
          renderItem={user => (
            <List.Item>
              <Card
                type='inner'
                title={user.name}
              >
                {user.email}
              </Card>
            </List.Item>
          )}
          locale={{
            'emptyText': 'No users are associated with this company!'
          }}
        />
      </Card>
    )
  }

  render () {
    return (
      <Fragment>
        <Card
          loading={this.props.companyUI.fetching}
          actions={[
            <Fragment>
              <Tooltip title={`Jobs at ${this.props.company.name}`}>
                <Icon type='exception' theme='outlined' /> {this.props.company.jobs ? this.props.company.jobs.length : 0}
              </Tooltip>
            </Fragment>,
            <Fragment>
              <Tooltip title={`Users associated with ${this.props.company.name}`}>
                <Icon type='team' theme='outlined' /> {this.props.company.users ? this.props.company.users.length : 0}
              </Tooltip>
            </Fragment>,
            <Link to={`/companies/${this.props.id}/edit`}>
              <Tooltip title={`Edit ${this.props.company.name}`}>
                <Icon type='edit' theme='outlined' />
              </Tooltip>
            </Link>
          ]}
        >
          <Card.Meta title={this.props.company.name} />
        </Card>
        <Row gutter={24}>
          <Col span={14}>
            {this.jobsNode()}
          </Col>
          <Col span={10}>
            {this.usersNode()}
          </Col>
        </Row>
      </Fragment>
    )
  }
}

ShowCompanyForm.propTypes = {
  company: PropTypes.object,
  companyUI: PropTypes.object,
  fetchCompany: PropTypes.func.isRequired,
  resetCompany: PropTypes.func.isRequired
}

export default ShowCompanyForm
