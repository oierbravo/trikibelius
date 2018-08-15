import { connect } from 'react-redux'
import FileButtons from '../components/UI/FileButtons'
import { ElementTypes,addElement, deleteElement, toggleAlternative,clearElements,importNumbers} from '../actions';

const mapStateToProps = state => ({
    elements: state.elements.present
})

const mapDispatchToProps = (dispatch) => ({
    clearElements: () => dispatch(clearElements()),
    importNumbers: () => dispatch(importNumbers())
})
export default connect(
  mapStateToProps,
 mapDispatchToProps
)(FileButtons)