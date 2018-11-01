import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Pagination from '../../components/functional/companies/pagination'
import { fetchCompanies, updateCurrentPage } from '../../actions/companies'

const mapStateToProps = state => ({
  totalRecords: state.companies.totalPages * 10,
  currentPage: state.companies.currentPage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCompanies, updateCurrentPage }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
