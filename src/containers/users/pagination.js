import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Pagination from '../../components/functional/users/pagination'
import { fetchUsers, updateCurrentPage } from '../../actions/users'

const mapStateToProps = state => ({
  totalRecords: state.users.totalPages * 10,
  currentPage: state.users.currentPage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUsers, updateCurrentPage }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
