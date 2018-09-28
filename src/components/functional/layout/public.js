import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd'
import Loadable from 'react-loadable'

class PublicLayout extends Component {
  static Container = props => (
    <Row
      type='flex'
      justify='center'
      style={{ margin: '50px', minHeight: '100vh' }}
    >
      <Col span={6}>{props.children}</Col>
    </Row>
  );

  static MenuContainer = props => (
    <Row type='flex' justify='center' style={{ margin: '0 -24px' }}>
      <Col span={18}>{props.children}</Col>
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
      <Layout.Header>
        <PublicLayout.MenuContainer>
          <div className='logo' />
          <Menu mode='horizontal' style={{ lineHeight: '64px', margin: '0 24px' }} theme='dark'>
            <Menu.Item key='auth'>
              <NavLink to='/auth'>Auth</NavLink>
            </Menu.Item>
          </Menu>
        </PublicLayout.MenuContainer>
      </Layout.Header>
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
