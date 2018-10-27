import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBox from '../../components/functional/users/search-box'
import { fetchUsers, updateSearch } from '../../actions/users'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUsers, updateSearch }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)
