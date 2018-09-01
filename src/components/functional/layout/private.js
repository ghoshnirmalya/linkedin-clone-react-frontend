import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd'

import asyncComponent from '../../../lib/async-component'

const AsyncHome = asyncComponent(() => import('../../../pages/home'))
const AsyncUsers = asyncComponent(() => import('../../../pages/users'))

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

  render = () => {
    if (this.props.history.location.pathname === '/auth') {
      return <Redirect to='/' />
    }

    return (
      <Layout className='layout'>
        <Layout.Header style={{ backgroundColor: '#fff' }}>
          <div className='logo' />
          <Menu mode='horizontal' style={{ lineHeight: '64px' }}>
            <Menu.Item key='users'>
              <NavLink to='/users'>Users</NavLink>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <PrivateLayout.Container>
            <Switch>
              <Route exact path='/' component={AsyncHome} />
              <Route exact path='/users' component={AsyncUsers} />
            </Switch>
          </PrivateLayout.Container>
        </Layout.Content>
      </Layout>
    )
  };
}

export default PrivateLayout
