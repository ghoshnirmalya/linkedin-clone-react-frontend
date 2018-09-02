import React from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'

class App extends React.Component {
  static LazyPublicLayout = Loadable({
    loader: () => import('../layout/public'),
    loading () {
      return <div>Loading...</div>
    }
  });

  static LazyPrivateLayout = Loadable({
    loader: () => import('../layout/private'),
    loading () {
      return <div>Loading...</div>
    }
  });

  render = () => {
    if (!this.props.authenticated) {
      return <App.LazyPublicLayout history={this.props.history} />
    }

    return (
      <App.LazyPrivateLayout
        invalidateUser={this.props.invalidateUser}
        history={this.props.history}
      />
    )
  };
}

App.propTypes = {
  authentication: PropTypes.object,
  history: PropTypes.object,
  invalidateUser: PropTypes.func
}

export default App
