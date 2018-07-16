import {
  Directions
} from '../actions'

class NumberMaps {
  constructor(map) {
        this.map = map;
    }
    getAlternative(note){
      if(note === undefined ){
        return false;
      }
      var current = this.map.find((el)=>el.Number === note.data.number);
      var currentNote = current[note.data.direction];
      var alternative = this.map.find(function(el){
        if(el.Open === current[note.data.direction] || el.Close === current[note.data.direction]) {
          if(el.Number !== current.Number){
            return true;
          }
          return false;
        } else {  
          return false;
        }
      });
      if(!alternative){
        return false;
      }
      return {
        number:alternative.Number,
        direction: (alternative.Open === currentNote ) ? Directions.OPEN : Directions.CLOSE,
        selected: true
      }
    }
    getNote(number,direction){
      var note = this.map.find(function(el){
        if(el.Number === number)
          return {...el}
        return false;
      });
      if(typeof note !== 'undefined'){
        return note[direction];
      }
      return '';
      
    }
    getNumbers(note){
      var numbers = this.map.find(function(el){
        if((el.Open === note) || (el.Close === note)){
          return {...el}
        }
        return false;
      });
      if(typeof note !== 'undefined'){
        return numbers
      }
      return [];
      
    }
    getMap(){
      return this.map;
    }
}
export default NumberMaps