import { connect } from 'react-redux'
import BasicButtons from '../components/UI/BasicButtons'
import { ElementTypes,addElement, deleteElement, toggleAlternative} from '../actions';

const mapStateToProps = state => ({
 state
})

const mapDispatchToProps = (dispatch) => ({
  addLineBreak: () => dispatch(addElement({type:ElementTypes.LINEBREAK})),
  addSilence: () => dispatch(addElement({type:ElementTypes.SILENCE})),
  deleteElement: () => dispatch(deleteElement()),
  toggleAlternative: (alternative) => dispatch(toggleAlternative(alternative))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicButtons)