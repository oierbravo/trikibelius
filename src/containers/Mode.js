import { connect } from 'react-redux'
import {  setEditMode } from '../actions';
import SelectMode from '../components/UI/SelectMode';

const mapStateToProps = state => ({
 mode: state.mode
})

const mapDispatchToProps = (dispatch) => ({
    changeMode: (mode) => dispatch(setEditMode(mode))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMode)