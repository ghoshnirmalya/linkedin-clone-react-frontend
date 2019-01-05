import React, { Component } from 'react'
import { Layout, Col, Row, Tabs } from 'antd'
import { NavLink } from 'react-router-dom'

import SignInForm from '../../containers/auth/sign-in-form'
import SignUpForm from '../../containers/auth/sign-up-form'

import Logo from '../../assets/images/logo.png'

const TabPane = Tabs.TabPane

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
        </Layout.Header>
        <Row type='flex' justify='center' style={{ minHeight: '100vh' }}>
          <Col span={6}>
            <Tabs defaultActiveKey='signIn'>
              <TabPane tab='Sign In' key='signIn'>
                <SignInForm />
              </TabPane>
              <TabPane tab='Sign Up' key='signUp'>
                <SignUpForm />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default AuthPage
