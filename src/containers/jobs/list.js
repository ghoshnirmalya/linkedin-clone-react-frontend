import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import toArray from 'lodash/toArray'

import List from '../../components/functional/jobs/list'
import { fetchJobs, resetJobs } from '../../actions/jobs'

const mapStateToProps = state => ({
  jobs: toArray(state.jobs.jobs),
  jobsUI: state.jobs.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchJobs, resetJobs }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
