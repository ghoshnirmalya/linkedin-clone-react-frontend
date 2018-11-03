import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon, Button, Spin } from 'antd'

class EditJobForm extends Component {
  componentDidMount () {
    this.props.fetchJob(this.props.id)
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
      <Spin spinning={this.props.jobUI.fetching}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label='Title'>
            <Input
              value={this.props.job.title}
              prefix={<Icon type='bank' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Title'
              size='large'
              onChange={this.handleChange}
              name='title'
            />
          </Form.Item>
          <Form.Item label='Description'>
            <Input.TextArea
              value={this.props.job.description}
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
      </Spin>
    )
  }
}

EditJobForm.propTypes = {
  job: PropTypes.object,
  jobUI: PropTypes.object,
  fetchJob: PropTypes.func.isRequired,
  saveJob: PropTypes.func.isRequired,
  updateJob: PropTypes.func.isRequired,
  resetJob: PropTypes.func.isRequired
}

export default EditJobForm
