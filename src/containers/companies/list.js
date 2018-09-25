import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toArray from 'lodash/toArray'

import List from '../../components/functional/companies/list'
import { fetchCompanies } from '../../actions/companies'

const mapStateToProps = state => ({
  companies: toArray(state.companies.companies),
  companiesUI: state.companies.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCompanies }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
