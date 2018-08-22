import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../../lib/async-component'

const AsyncAuth = asyncComponent(() => import('../../../pages/auth'))

class PublicLayout extends Component {
  render () {
    if (this.props.history.location.pathname !== '/auth') {
      return <Redirect to='/auth' />
    }

    return (
      <Switch>
        <Route exact path='/auth' component={AsyncAuth} />
      </Switch>
    )
  }
}

export default PublicLayout
