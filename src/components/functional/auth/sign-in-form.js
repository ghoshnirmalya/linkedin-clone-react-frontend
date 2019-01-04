import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'

class SignInForm extends Component {
  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values)
      }
    })
  };

  render = () => {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item hasFeedback>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(
            <Input
              prefix={<Icon type='mail' />}
              placeholder='Email'
              size='large'
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type='lock' />}
              type='password'
              placeholder='Password'
              size='large'
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
            disabled={this.props.authenticationUI.loading}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    )
  };
}

SignInForm.propTypes = {
  authenticationUI: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired
}

const WrappedLoginForm = Form.create()(SignInForm)

export default WrappedLoginForm
