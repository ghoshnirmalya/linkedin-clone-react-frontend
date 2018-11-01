import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Edit from '../../containers/jobs/edit'

class ShowJobPage extends Component {
  render () {
    return <Edit history={this.props.history} id={this.props.match.params.id} />
  }
}

ShowJobPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default ShowJobPage
