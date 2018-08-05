import { connect } from 'react-redux'
import ElementList from '../components/Sheet/ElementList'
import { clickElement } from '../actions';
const mapStateToProps = state => ({
  elements: state.elements.present,
  currentMode:state.mode
})

const mapDispatchToProps = dispatch => ({
  clickElement: (index,currentMode) => dispatch(clickElement(index,currentMode))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementList)