/*
 * action types
 */
export const ADD_ELEMENT = 'ADD_ELEMENT'
export const SELECT_ELEMENT = 'SELECT_ELEMENT'
export const DELETE_ELEMENT = 'DELETE_ELEMENT'
export const TOGGLE_ALTERNATIVE = 'TOGGLE_ALTERNATIVE'

export const TOGGLE_DIRECTION = 'TOGGLE_DIRECTION'
export const SET_DIRECTION = 'SET_DIRECTION'
export const SET_DIRECTION_OPEN = 'SET_DIRECTION_OPEN'
export const SET_DIRECTION_CLOSE = 'SET_DIRECTION_CLOSE'

export const SET_EDIT_MODE = 'SET_EDIT_MODE'
/*
 * other constants
 */
export const ElementTypes = {
  NOTE: 'NOTE',
  SILENCE: 'SILENCE',
  LINEBREAK: 'LINEBREAK'
}
export const Directions = {
  OPEN: 'Open',
  CLOSE: 'Close'
}

export const EditModes = {
  NONE: 'NONE',
  SELECT: 'SELECT',
  ALTERNATIVE: 'ALTERNATIVE',
  DELETE: 'DELETE'
}
/*
 * action creators
 */
export function addElement(element) {
  return { type: ADD_ELEMENT, element }
}
export function selectElement(index) {
  return { type: SELECT_ELEMENT, index }
}
export function deleteElement(index) {
  return { type: DELETE_ELEMENT, index }
}
export function toggleAlternative(alternative){
  return { type: TOGGLE_ALTERNATIVE,alternative }
}
export function toggleDirection(){
  return { type: TOGGLE_DIRECTION }
}
export function setDirection(direction){
  return { type: SET_DIRECTION,direction}
}
export function setDirectionOpen(){
  return { type: SET_DIRECTION_OPEN }
}
export function setDirectionClose(){
  return { type: SET_DIRECTION_CLOSE }
}

export function setEditMode(mode){
  return { type: SET_EDIT_MODE ,mode }
}