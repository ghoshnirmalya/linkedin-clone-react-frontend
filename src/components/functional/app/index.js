import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../../../pages/home'

export default class App extends React.Component {
  render () {
    return <Route exact path='/' render={() => <Home />} />
  }
}
