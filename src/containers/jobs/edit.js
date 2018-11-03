import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Edit from '../../components/functional/jobs/edit'
import {
  fetchJob,
  saveJob,
  updateJob,
  resetJob
} from '../../actions/job'

const mapStateToProps = state => ({
  job: state.job.job,
  jobUI: state.job.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchJob, saveJob, updateJob, resetJob },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
