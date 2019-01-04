import React, { Component } from 'react'
import { Layout, Menu, Col, Row } from 'antd'
import { NavLink } from 'react-router-dom'

import SignInForm from '../../containers/auth/sign-in-form'
import SignUpForm from '../../containers/auth/sign-up-form'

import Logo from '../../assets/images/logo.png'

class AuthPage extends Component {
  render () {
    return (
      <Col span={24}>
        <Layout.Header
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            marginBottom: '50px'
          }}
        >
          <NavLink to='/'>
            <img src={Logo} alt='logo' style={{ width: '16px' }} />
          </NavLink>
          <Menu mode='horizontal' style={{ lineHeight: '64px' }}>
            <Menu.Item key='auth'>
              <NavLink to='/auth'>Login</NavLink>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Row
          type='flex'
          justify='center'
          style={{ minHeight: '100vh' }}
          gutter={24}
        >
          <Col span={6}>
            <h2>Sign in</h2>
            <SignInForm />
          </Col>
          <Col span={6}>
            <h2>Sign up</h2>
            <SignUpForm />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default AuthPage
