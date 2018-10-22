import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Show from '../../containers/users/show'

class ShowUserPage extends Component {
  render () {
    return <Show history={this.props.history} id={this.props.match.params.id} />
  }
}

ShowUserPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default ShowUserPage
