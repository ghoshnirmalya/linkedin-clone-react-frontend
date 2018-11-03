import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Card } from 'antd'
import { Link } from 'react-router-dom'

class JobsList extends Component {
  componentDidMount () {
    this.props.fetchJobs()
  }

  componentWillUnmount = () => {
    this.props.resetJobs()
  }

  render () {
    return (
      <List
        loading={this.props.jobsUI.fetching}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={this.props.jobs}
        renderItem={item => (
          <Link to={`/companies/${item.company.id}/jobs/${item.id}/edit`}>
            <List.Item>
              <Card title={item.title} hoverable bordered={false}>
                {item.description}
              </Card>
            </List.Item>
          </Link>
        )}
      />
    )
  }
}

JobsList.propTypes = {
  jobsUI: PropTypes.object,
  fetchJobs: PropTypes.func.isRequired,
  resetJobs: PropTypes.func.isRequired
}

export default JobsList
