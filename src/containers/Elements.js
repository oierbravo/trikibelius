import { connect } from 'react-redux'
import ElementList from '../components/Sheet/ElementList'
import { selectElement } from '../actions';

const mapStateToProps = state => ({
  elements: state.elements.present
})

const mapDispatchToProps = dispatch => ({
  clickElement: index => dispatch(selectElement(index))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementList)