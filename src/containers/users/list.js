import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toArray from 'lodash/toArray'

import List from '../../components/functional/users/list'
import { fetchUsers, updateCurrentPage, resetUsers } from '../../actions/users'

const mapStateToProps = state => ({
  users: toArray(state.users.users),
  currentPage: state.companies.currentPage,
  totalPages: state.companies.totalPages,
  usersUI: state.users.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUsers, updateCurrentPage, resetUsers }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
