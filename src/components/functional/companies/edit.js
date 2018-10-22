import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon, Button, Spin } from 'antd'

class EditCompanyForm extends Component {
  componentDidMount () {
    this.props.fetchCompany(this.props.id)
  }

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
      <Spin spinning={this.props.companyUI.fetching}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label='Name'>
            <Input
              value={this.props.company.name}
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
      </Spin>
    )
  }
}

EditCompanyForm.propTypes = {
  company: PropTypes.object,
  companyUI: PropTypes.object,
  fetchCompany: PropTypes.func.isRequired,
  saveCompany: PropTypes.func.isRequired,
  updateCompany: PropTypes.func.isRequired,
  resetCompany: PropTypes.func.isRequired
}

export default EditCompanyForm
