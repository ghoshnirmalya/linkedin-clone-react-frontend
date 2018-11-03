import React, { Component } from 'react'
import { Layout, Col, Row, Button } from 'antd'
import { NavLink } from 'react-router-dom'

import PresentationalImage1 from '../../assets/images/Companies listing page.png'
import Logo from '../../assets/images/logo.png'

class IndexPage extends Component {
  render () {
    return (
      <Col span={24} style={{ backgroundColor: '#fff' }}>
        <Layout.Header style={{
          display: 'flex',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          marginBottom: '50px'
        }}>
          <NavLink to='/'>
            <img
              src={Logo}
              width='20px'
              alt='logo'
            />
          </NavLink>
        </Layout.Header>
        <Row type='flex'
          justify='center'
          style={{ marginBottom: '50px' }}
        >
          <Col span={12}>
            <h1 style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: '40px'
            }}
            >
            LinkedIn React
            </h1>
            <h2 style={{
              textAlign: 'center',
              fontSize: '20px',
              color: '#888'
            }}
            >
              Frontend for a software similar to LinkedIn build with ReactJS &amp; Redux
            </h2>
          </Col>
        </Row>
        <Row
          type='flex'
          justify='center'
          style={{ marginBottom: '50px' }}
        >
          <Col span={4} style={{ textAlign: 'center' }}>
            <NavLink to='/auth'>
              <Button type='primary' size='large'>Login &amp; Get Started</Button>
            </NavLink>
          </Col>
        </Row>
        <Row
          type='flex'
          justify='center'
          style={{ marginBottom: '50px' }}
        >
          <Col span={24} style={{
            textAlign: 'center',
            padding: '0 100px',
            backgroundColor: '#4a8fe1'
          }}
          >
            <img src={PresentationalImage1} alt='Companies Listing page'width='100%' />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default IndexPage
