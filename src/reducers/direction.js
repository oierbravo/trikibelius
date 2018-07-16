import {
    Directions,
    TOGGLE_DIRECTION,
    SET_DIRECTION,
    SET_DIRECTION_OPEN,
    SET_DIRECTION_CLOSE
 } from '../actions'

 const initialState = Directions.OPEN
function direction(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_DIRECTION:
        return (state === Directions.OPEN) ? Directions.CLOSE : Directions.OPEN
    case SET_DIRECTION:
        return action.direction
      case SET_DIRECTION_OPEN:
        return Directions.CLOSE
    case SET_DIRECTION_CLOSE:
        return Directions.CLOSE
      default:
        return state
    }
  }
export default direction