import {
    EditModes,
    SET_EDIT_MODE
 } from '../actions'

 const initialState = EditModes.SELECT
function mode(state = initialState, action) {
    switch (action.type) {
      case SET_EDIT_MODE:
        return action.mode
        default:
          return state;
    }
  }
export default mode