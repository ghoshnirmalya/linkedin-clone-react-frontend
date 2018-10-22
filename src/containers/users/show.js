import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Show from '../../components/functional/users/show'
import { fetchUser, resetUser } from '../../actions/user'

const mapStateToProps = state => ({
  user: state.user.user,
  userUI: state.user.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUser, resetUser }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)
