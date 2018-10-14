import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Show from '../../components/functional/companies/show'
import { fetchCompany, saveCompany, updateCompany, resetCompany } from '../../actions/company'

const mapStateToProps = state => ({
  company: state.company.company,
  companyUI: state.company.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCompany, saveCompany, updateCompany, resetCompany }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)
