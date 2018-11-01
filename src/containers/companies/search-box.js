import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBox from '../../components/functional/companies/search-box'
import { fetchCompanies, updateSearch, updateCurrentPage } from '../../actions/companies'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCompanies, updateSearch, updateCurrentPage }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)
