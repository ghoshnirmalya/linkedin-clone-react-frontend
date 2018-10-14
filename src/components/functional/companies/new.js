import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'

class AddNewCompanyForm extends Component {
  handleChange = e => {
    this.props.updateCompany(e.target.name, e.target.value)
  };

  handleSubmit = async e => {
    e.preventDefault()

    await this.props.saveCompany()

    this.props.history.push('/companies')
  };

  componentWillUnmount = () => {
    this.props.resetCompany()
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label='Name'>
          <Input
            prefix={<Icon type='bank' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Name'
            size='large'
            onChange={this.handleChange}
            name='name'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            disabled={this.props.companyUI.saving}
            size='large'
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

AddNewCompanyForm.propTypes = {
  company: PropTypes.object,
  companyUI: PropTypes.object,
  saveCompany: PropTypes.func.isRequired,
  updateCompany: PropTypes.func.isRequired,
  resetCompany: PropTypes.func.isRequired
}

export default AddNewCompanyForm
