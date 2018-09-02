import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TokenStore from '../../lib/token-store'
import App from '../../components/functional/app'

const mapStateToProps = state => ({
  authenticated: !!TokenStore.apiToken
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

// https://github.com/ReactTraining/react-router/issues/3536#issuecomment-225586661
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(App)
