import { combineReducers } from 'redux'
import elements from './elements'
import direction from './direction'
import mode from './mode'

  const trikibelius = combineReducers({
    elements,
    direction,
    mode
  })
  
  export default trikibelius