import {
    ADD_ELEMENT,
    SELECT_ELEMENT,
    DELETE_ELEMENT,
    TOGGLE_ALTERNATIVE,
    ElementTypes,
    Directions
 } from '../actions'

 const initialState = []
function elements(state = initialState, action) {
    switch (action.type) {
      case ADD_ELEMENT:
        switch (action.element.type){
          case ElementTypes.NOTE:
            //solo en caso de que number NO sea false
            return (action.element.data.number) ? [
              ...state,
              {
                type: action.element.type,
                data: action.element.data
              }
            ] : state;
          /*  retrun [
              state.map((element, index) =>
                  {...element, selected: false})
            ]*/
          default:
            return [
              ...state,
              {
                type: action.element.type
              }
            ]
        }
        case SELECT_ELEMENT:
          return state.map((element, index) =>
            (index === action.index)
              ? {...element, selected: !element.selected}
              : {...element, selected: false}
          )
      case DELETE_ELEMENT:
          return  state.filter((element) => (!element.selected) ? true : false)
      case TOGGLE_ALTERNATIVE:
      //return state;
          var current = state.findIndex((element) => (element.selected) ? true : false);
          console.log(action);
          console.log(current);
          var newItem = {
            type:ElementTypes.NOTE,
            selected: true,
            data:{
              number:action.alternative.number,
              direction:action.alternative.direction
            }

          }
          if(current === -1){
            return state;
          } else {
            return [                // array is new
              ...state.slice(0, current), // first X items unchanged
              newItem,
              ...state.slice(current+1)     // last Y items unchanged
            ];
          }
      default:
        return state
    }
  }
export default elements