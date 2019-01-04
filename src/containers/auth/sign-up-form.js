import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TokenStore from '../../lib/token-store'
import SignUpForm from '../../components/functional/auth/sign-up-form'
import { signUp } from '../../actions/auth'

const mapStateToProps = state => ({
  authenticated: TokenStore.apiToken,
  authenticationUI: state.auth.ui
})

const mapDispatchToProps = dispatch => bindActionCreators({ signUp }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)
