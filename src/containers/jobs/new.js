import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import New from '../../components/functional/jobs/new'
import { saveJob, updateJob, resetJob } from '../../actions/job'

const mapStateToProps = state => ({
  job: state.job.job,
  jobUI: state.job.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { saveJob, updateJob, resetJob },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New)
