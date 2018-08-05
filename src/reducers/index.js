import { combineReducers } from 'redux'
import elements from './elements'
import direction from './direction'
import mode from './mode'
// redux-undo higher-order reducer
import undoable, { distinctState } from 'redux-undo'

  const trikibelius = combineReducers({
    elements: undoable(elements),
    direction: direction,
    mode: mode
  })
  
  export default trikibelius