import { connect } from 'react-redux'
import DirectionButtons from '../components/UI/DirectionButtons'
import { setDirection,toggleDirection } from '../actions';

const mapStateToProps = state => ({
  direction: state.direction
})

const mapDispatchToProps = (dispatch) => ({
  clickButton: (direction) => dispatch(setDirection(direction)),
  toggleDirection: () => dispatch(toggleDirection()),
  setDirection: (direction) => dispatch(setDirection(direction))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectionButtons)