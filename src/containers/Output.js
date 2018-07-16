import { connect } from 'react-redux'
import OutputContainer from '../components/UI/OutputContainer'

const mapStateToProps = state => ({
  elements: state.elements
})

export default connect(
  mapStateToProps
)(OutputContainer)