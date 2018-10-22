import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Edit from '../../components/functional/companies/edit'
import {
  fetchCompany,
  saveCompany,
  updateCompany,
  resetCompany
} from '../../actions/company'

const mapStateToProps = state => ({
  company: state.company.company,
  companyUI: state.company.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchCompany, saveCompany, updateCompany, resetCompany },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
