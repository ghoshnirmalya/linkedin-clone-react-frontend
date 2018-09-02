import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import List from '../../components/functional/users/list'
import { fetchUsers } from '../../actions/users'

const mapStateToProps = state => ({
  users: state.users.users,
  usersUI: state.users.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUsers }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
