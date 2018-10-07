import React, { Component } from 'react'
import { Layout, Menu, Col, Row } from 'antd'
import { NavLink } from 'react-router-dom'

import DashboardIllustration from '../../assets/images/dashboard-illustration.svg'

class IndexPage extends Component {
  render () {
    return <Col span={24}>
      <Layout.Header style={{
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginBottom: '50px'
      }}>
        <NavLink to='/'>LinkedIn React</NavLink>
        <Menu mode='horizontal' style={{ lineHeight: '64px' }}>
          <Menu.Item key='auth'>
            <NavLink to='/auth'>Login</NavLink>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Row type='flex' justify='center'>
        <Col span={12}>
          <img src={DashboardIllustration} alt='Dashboard' width='100%' />
        </Col>
      </Row>
    </Col>
  }
}

export default IndexPage
