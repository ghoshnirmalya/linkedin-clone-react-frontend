import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBox from '../../components/functional/jobs/search-box'
import { fetchJobs, updateSearch, updateCurrentPage } from '../../actions/jobs'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchJobs, updateSearch, updateCurrentPage }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)
