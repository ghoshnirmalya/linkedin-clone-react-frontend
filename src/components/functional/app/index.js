import React from 'react'
import PropTypes from 'prop-types'

import PublicLayout from '../layout/public'
import PrivateLayout from '../layout/private'

class App extends React.Component {
  render () {
    if (!this.props.authenticated) { return <PublicLayout history={this.props.history} /> }

    return (
      <PrivateLayout
        invalidateUser={this.props.invalidateUser}
        history={this.props.history}
      />
    )
  }
}

App.propTypes = {
  authentication: PropTypes.object,
  history: PropTypes.object,
  invalidateUser: PropTypes.func
}

export default App
