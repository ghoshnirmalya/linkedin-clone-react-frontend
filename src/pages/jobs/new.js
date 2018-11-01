import React, { Component } from 'react'
import PropTypes from 'prop-types'

import New from '../../containers/jobs/new'

class AddNewJobPage extends Component {
  render () {
    return <New history={this.props.history} />
  }
}

AddNewJobPage.propTypes = {
  history: PropTypes.object
}

export default AddNewJobPage
