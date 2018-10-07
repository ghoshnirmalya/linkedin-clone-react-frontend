import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Row } from 'antd'
import Loadable from 'react-loadable'

class PublicLayout extends Component {
  static Container = props => (
    <Row
      type='flex'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      {props.children}
    </Row>
  );

  static LazyAuth = Loadable({
    loader: () => import('../../../pages/auth'),
    loading () {
      return <div>Loading...</div>
    }
  });

  static LazyIndex = Loadable({
    loader: () => import('../../../pages/index'),
    loading () {
      return <div>Loading...</div>
    }
  });

  render = () => {
    if (['/auth', '/'].indexOf(this.props.history.location.pathname) === -1) {
      return <Redirect to='/auth' />
    }

    return <Layout>
      <Layout.Content>
        <PublicLayout.Container>
          <Switch>
            <Route exact path='/auth' component={PublicLayout.LazyAuth} />
            <Route exact path='/' component={PublicLayout.LazyIndex} />
          </Switch>
        </PublicLayout.Container>
      </Layout.Content>
    </Layout>
  };
}

export default PublicLayout
