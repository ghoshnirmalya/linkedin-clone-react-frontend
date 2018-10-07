import React, { Component } from 'react'
import PropTypes from 'prop-types'

import New from '../../containers/companies/new'

class AddNewCompanyPage extends Component {
  render () {
    return <New history={this.props.history} />
  }
}

AddNewCompanyPage.propTypes = {
  history: PropTypes.object
}

export default AddNewCompanyPage
