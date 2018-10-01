import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toArray from 'lodash/toArray'

import List from '../../components/functional/companies/list'
import { fetchCompanies, updateCurrentPage, resetCompanies } from '../../actions/companies'

const mapStateToProps = state => ({
  companies: toArray(state.companies.companies),
  currentPage: state.companies.currentPage,
  totalPages: state.companies.totalPages,
  companiesUI: state.companies.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCompanies, updateCurrentPage, resetCompanies }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
