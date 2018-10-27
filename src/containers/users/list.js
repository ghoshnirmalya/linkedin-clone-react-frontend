import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import List from '../../components/functional/users/list'
import { fetchUsers, updateCurrentPage, resetUsers } from '../../actions/users'

const mapStateToProps = state => ({
  users: state.users.users,
  currentPage: state.users.currentPage,
  totalPages: state.users.totalPages,
  usersUI: state.users.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUsers, updateCurrentPage, resetUsers }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
