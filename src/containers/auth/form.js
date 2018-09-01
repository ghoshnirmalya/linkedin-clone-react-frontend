import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TokenStore from '../../lib/token-store'
import Form from '../../components/functional/auth/form'
import { authenticate } from '../../actions/auth'

const mapStateToProps = state => ({
  authenticated: TokenStore.apiToken,
  authenticationUI: state.auth.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticate }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
