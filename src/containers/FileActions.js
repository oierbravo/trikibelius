import { connect } from 'react-redux'
import FileButtons from '../components/UI/FileButtons'
import { ElementTypes,addElement, deleteElement, toggleAlternative} from '../actions';

const mapStateToProps = state => ({
    elements: state.elements.present
})

/*const mapDispatchToProps = (dispatch) => ({
    exportNumbers: () => dispatch(exportNumbers())
})*/
export default connect(
  mapStateToProps,
 // mapDispatchToProps
)(FileButtons)