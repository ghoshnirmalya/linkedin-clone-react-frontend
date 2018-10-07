import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'

class AddNewCompanyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.saveCompany(values)

        this.props.history.push('/companies')
      }
    })
  };

  render () {
    const { getFieldDecorator } = this.props.form

    return <Form onSubmit={this.handleSubmit}>
      <Form.Item label='Name'>
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: 'Please input the name of the company!'
            }
          ]
        })(<Input prefix={<Icon type='bank' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Name' size='large' />)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' disabled={false} size='large'>
            Save
        </Button>
      </Form.Item>
    </Form>
  }
}

AddNewCompanyForm.propTypes = {
  companyUI: PropTypes.object,
  saveCompany: PropTypes.func.isRequired
}

export default Form.create()(AddNewCompanyForm)
