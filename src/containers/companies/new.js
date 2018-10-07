import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import New from '../../components/functional/companies/new'
import { saveCompany } from '../../actions/company'

const mapStateToProps = state => ({
  company: state.company.company,
  companyUI: state.company.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { saveCompany },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New)
