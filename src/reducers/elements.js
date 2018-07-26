import {
    ADD_ELEMENT,
    SELECT_ELEMENT,
    DELETE_ELEMENT,
    TOGGLE_ALTERNATIVE,
    ElementTypes
 } from '../actions'

 const initialState = []
function elements(state = initialState, action) {
    switch (action.type) {
      case ADD_ELEMENT:
        let current = state.findIndex((element) => (element.selected) ? true : false);
        if(current === state.length -1 || current === -1){
          return [                // array is new
            ...state.map((element, index) =>{return {...element,selected: false}}), // first X items unchanged
            action.element
          ];
        }
        return [                // array is new
          ...state.slice(0, current +1 ).map((element, index) =>{return {...element,selected: false}}), // first X items unchanged
          action.element,
          ...state.slice(current +1).map((element, index) =>{return {...element,selected: false}})     // last Y items unchanged
        ];
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
          if(action.alternative){
            let current = state.findIndex((element) => (element.selected) ? true : false);
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
         }
         return state;
      default:
        return state
    }
  }
export default elements