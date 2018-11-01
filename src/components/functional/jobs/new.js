import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'

class AddNewJobForm extends Component {
  componentDidMount () {
    this.props.updateJob('company_id', this.props.id)
  }

  handleChange = e => {
    this.props.updateJob(e.target.name, e.target.value)
  };

  handleSubmit = async e => {
    e.preventDefault()

    await this.props.saveJob()
    this.props.history.push('/jobs')
  };

  componentWillUnmount = () => {
    this.props.resetJob()
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label='Title'>
          <Input
            prefix={<Icon type='bank' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Title'
            size='large'
            onChange={this.handleChange}
            name='title'
          />
        </Form.Item>
        <Form.Item label='Description'>
          <Input
            prefix={<Icon type='bank' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Description'
            size='large'
            onChange={this.handleChange}
            name='description'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            disabled={this.props.jobUI.saving}
            size='large'
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

AddNewJobForm.propTypes = {
  jobUI: PropTypes.object,
  saveJob: PropTypes.func.isRequired,
  updateJob: PropTypes.func.isRequired,
  resetJob: PropTypes.func.isRequired
}

export default AddNewJobForm
