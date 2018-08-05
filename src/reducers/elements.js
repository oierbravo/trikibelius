import {
  CLICK_ELEMENT,
    ADD_ELEMENT,
    SELECT_ELEMENT,
    DELETE_ELEMENT,
    TOGGLE_ALTERNATIVE,
    TOGGLE_DIRECTION,
    ElementTypes,
    EditModes,
    Directions,
    GROUP_LEFT,
    GROUP_NONE 
 } from '../actions'

 import {TrikiNumbers} from '../maps/Triki'
 const initialState = []
function SelectElement(state,action){
  return state.map((element, index) =>  (index === action.index)
    ? {...element, selected: !element.selected}
    : {...element, selected: false} )
}
function DeleteElement(state,action){
  
  return  state.filter((element,index) => (index === action.index) ? false : true)
}
function ToggleAlternative(state,action){
  let alternative = TrikiNumbers.getAlternative(state[action.index]);
  if(alternative){
    var newItem = {
      type:ElementTypes.NOTE,
      selected: true,
      data:{
        number:alternative.number,
        direction:alternative.direction
      }

    }
    if(action.index === 0){
      return [ 
        newItem,              // array is new
        ...state.slice(1)
      ];
    } else if(action.index === state.length - 1){
      return [                // array is new
        ...state.slice(0,state.length - 1),
        newItem
      ];
    } else {
      return [                // array is new
        ...state.slice(0, action.index), // first X items unchanged
        newItem,
        ...state.slice(action.index+1)     // last Y items unchanged
      ];
    }
    
 }
 return state;
}
function ToggleDirection(state,action){
  return state.map((element, index) =>  (index === action.index)
    ? {...element, data: {...element.data,direction: (element.data.direction === Directions.OPEN) ? Directions.CLOSE :Directions.OPEN}}
    : {...element} )
}
function GroupLeft(state,action){
  console.log(state);
  return state.map((element, index) =>  (index === action.index)
    ? {...element, data: {...element.data,group: (element.data.group === GROUP_NONE) ? GROUP_LEFT :GROUP_NONE}}
    : {...element} )
}
function elements(state = initialState, action) {
    switch (action.type) {
      case CLICK_ELEMENT:
        switch(action.currentMode){
          case EditModes.SELECT: 
            return SelectElement(state,action);
          case EditModes.DELETE: 
            return DeleteElement(state,action);
          case EditModes.ALTERNATIVE:
            return ToggleAlternative(state,action);
          case EditModes.DIRECTION:
            return ToggleDirection(state,action);
          case EditModes.GROUP_LEFT:
            return GroupLeft(state,action);
          default:
            return state
        }
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
        return SelectElement(state,action);
        
      case DELETE_ELEMENT:
        return DeleteElement(state,action);
          
      case TOGGLE_ALTERNATIVE:
      //return state;
        return ToggleAlternative(state,action);
      case TOGGLE_DIRECTION:
        //return state;
          return ToggleDirection(state,action);
      default:
        return state
    }
  }
export default elements