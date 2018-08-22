import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../../lib/async-component'

const AsyncHome = asyncComponent(() => import('../../../pages/home'))

class PrivateLayout extends Component {
  render () {
    if (this.props.history.location.pathname === '/auth') {
      return <Redirect to='/' />
    }

    return (
      <Switch>
        <Route exact path='/' component={AsyncHome} />
      </Switch>
    )
  }
}

export default PrivateLayout
