import { connect } from 'react-redux'
import TrikiPad from '../components/UI/TrikiPad'
import { addElement,ElementTypes,GROUP_NONE } from '../actions';

const mapStateToProps = state => ({
  currentDirection: state.direction
})

const mapDispatchToProps = (dispatch) => ({
    clickButton: function(number,direction) {
      dispatch(addElement({type:ElementTypes.NOTE,selected:true,data:{number:number,direction:direction,group:GROUP_NONE}}))
    }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrikiPad)