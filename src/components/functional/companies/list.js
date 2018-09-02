import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Card } from 'antd'

class CompaniesList extends Component {
  componentDidMount () {
    this.props.fetchCompanies()
  }

  render () {
    return (
      <List
        loading={this.props.companiesUI.loading}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={this.props.companies}
        renderItem={item => (
          <List.Item>
            <Card title={item.name} hoverable>
              {item.name}
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

CompaniesList.propTypes = {
  companiesUI: PropTypes.object,
  fetchCompanies: PropTypes.func.isRequired
}

export default CompaniesList
