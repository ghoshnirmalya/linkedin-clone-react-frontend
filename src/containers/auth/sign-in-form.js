import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TokenStore from '../../lib/token-store'
import SignInForm from '../../components/functional/auth/sign-in-form'
import { signIn } from '../../actions/auth'

const mapStateToProps = state => ({
  authenticated: TokenStore.apiToken,
  authenticationUI: state.auth.ui
})

const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
