import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'

import PublicLayout from '../layout/public'
import PrivateLayout from '../layout/private'

class App extends React.Component {
  static Container = props => (
    <Row
      type='flex'
      justify='space-around'
      align='middle'
      style={{ height: '100vh' }}
    >
      {props.children}
    </Row>
  );

  render = () => {
    if (!this.props.authenticated) {
      return (
        <App.Container>
          <PublicLayout history={this.props.history} />
        </App.Container>
      )
    }

    return (
      <App.Container>
        <PrivateLayout
          invalidateUser={this.props.invalidateUser}
          history={this.props.history}
        />
      </App.Container>
    )
  };
}

App.propTypes = {
  authentication: PropTypes.object,
  history: PropTypes.object,
  invalidateUser: PropTypes.func
}

export default App
