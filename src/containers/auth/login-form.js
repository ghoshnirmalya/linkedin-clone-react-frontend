import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TokenStore from '../../lib/token-store'
import LoginForm from '../../components/functional/auth/login-form'
import { signIn } from '../../actions/auth'

const mapStateToProps = state => ({
  authenticated: TokenStore.apiToken,
  authenticationUI: state.auth.ui
})

const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
