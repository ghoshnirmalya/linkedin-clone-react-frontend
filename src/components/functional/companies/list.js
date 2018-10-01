import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Card, Button } from 'antd'

class CompaniesList extends Component {
  componentDidMount () {
    this.props.fetchCompanies()
  }

  loadMoreButtonNode = () => {
    if (this.props.totalPages === this.props.currentPage) return false

    return <Button onClick={() => this.handleUpdateCurrentPage()} disabled={this.props.companiesUI.loading}>Load more</Button>
  }

  handleUpdateCurrentPage = () => {
    this.props.updateCurrentPage(this.props.currentPage + 1)
    this.props.fetchCompanies()
  }

  componentWillUnmount = () => {
    this.props.resetCompanies()
  }

  render () {
    return (
      <List
        loading={this.props.companiesUI.loading}
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={this.props.companies}
        loadMore={this.loadMoreButtonNode()}
        renderItem={item => (
          <List.Item>
            <Card title={item.name} hoverable bordered={false}>
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
