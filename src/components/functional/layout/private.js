import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd'
import Loadable from 'react-loadable'

class PrivateLayout extends Component {
  static Container = props => (
    <Row
      type='flex'
      justify='center'
      style={{ margin: '50px', minHeight: '100vh' }}
    >
      <Col span={18}>{props.children}</Col>
    </Row>
  );

  static LazyHome = Loadable({
    loader: () => import('../../../pages/home'),
    loading () {
      return <div>Loading...</div>
    }
  });

  static LazyUsers = Loadable({
    loader: () => import('../../../pages/users'),
    loading () {
      return <div>Loading...</div>
    }
  });

  static LazyCompanies = Loadable({
    loader: () => import('../../../pages/companies'),
    loading () {
      return <div>Loading...</div>
    }
  });

  render = () => {
    if (['/auth', '/'].indexOf(this.props.history.location.pathname) > -1) {
      return <Redirect to='/home' />
    }

    return (
      <Layout className='layout'>
        <Layout.Header style={{ backgroundColor: '#fff' }}>
          <div className='logo' />
          <Menu mode='horizontal' style={{ lineHeight: '64px' }}>
            <Menu.Item key='users'>
              <NavLink to='/users'>Users</NavLink>
            </Menu.Item>
            <Menu.Item key='companies'>
              <NavLink to='/companies'>Companies</NavLink>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <PrivateLayout.Container>
            <Switch>
              <Route exact path='/home' component={PrivateLayout.LazyHome} />
              <Route exact path='/users' component={PrivateLayout.LazyUsers} />
              <Route
                exact
                path='/companies'
                component={PrivateLayout.LazyCompanies}
              />
            </Switch>
          </PrivateLayout.Container>
        </Layout.Content>
      </Layout>
    )
  };
}

export default PrivateLayout
