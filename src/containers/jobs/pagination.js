import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Pagination from '../../components/functional/jobs/pagination'
import { fetchJobs, updateCurrentPage } from '../../actions/jobs'

const mapStateToProps = state => ({
  totalRecords: state.jobs.totalPages * 10,
  currentPage: state.jobs.currentPage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchJobs, updateCurrentPage }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
