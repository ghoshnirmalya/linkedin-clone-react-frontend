import React, { Component } from 'react'
import { Col } from 'antd'

import Form from '../../containers/auth/form'

class Auth extends Component {
  render () {
    return (
      <Col span={8}>
        <Form />
      </Col>
    )
  }
}

export default Auth
