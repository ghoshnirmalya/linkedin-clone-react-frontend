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

  static LazyAuth = Loadable({
    loader: () => import('../../../pages/auth'),
    loading () {
      return <div>Loading...</div>
    }
  });

  render = () => {
    if (this.props.history.location.pathname !== '/auth') {
      return <Redirect to='/auth' />
    }

    return (
      <Layout className='layout'>
        <Layout.Header style={{ backgroundColor: '#fff' }}>
          <div className='logo' />
          <Menu mode='horizontal' style={{ lineHeight: '64px' }}>
            <Menu.Item key='auth'>
              <NavLink to='/auth'>Auth</NavLink>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <PublicLayout.Container>
            <Switch>
              <Route exact path='/auth' component={PublicLayout.LazyAuth} />
            </Switch>
          </PublicLayout.Container>
        </Layout.Content>
      </Layout>
    )
  };
}

export default PublicLayout
