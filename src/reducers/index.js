import { combineReducers } from 'redux'
import elements from './elements'
import direction from './direction'
import mode from './mode'
// redux-undo higher-order reducer
import undoable from 'redux-undo';

  const trikibelius = combineReducers({
    elements: undoable(elements),
    direction,
    mode
  })
  
  export default trikibelius