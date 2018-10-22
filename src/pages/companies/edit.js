import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Edit from '../../containers/companies/edit'

class ShowCompanyPage extends Component {
  render () {
    return <Edit history={this.props.history} id={this.props.match.params.id} />
  }
}

ShowCompanyPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default ShowCompanyPage
