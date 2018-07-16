import {
  Directions,
  ElementTypes
} from '../actions'

export const BbEb = {
  map:[
    {
      Number: 1,
      Open: "C5",
      Close: "F5"
    },
    {
      Number: 2,
      Open: "D5",
      Close: "G5"
    },
    {
      Number: 3,
      Open: "A4",
      Close: "D5"
    },
    {
      Number: 4,
      Open: "C5",
      Close: "Eb5"
    },
    {
      Number: 5,
      Open: "G4",
      Close: "Bb4"
    },
    {
      Number: 6,
      Open: "G#4",
      Close: "Bb4"
    },
    {
      Number: 7,
      Open: "Eb4",
      Close: "F4"
    },
    {
      Number: 8,
      Open: "F4",
      Close: "G4"
    },
    {
      Number: 9,
      Open: "C4",
      Close: "D4"
    },
    {
      Number: 10,
      Open: "D4",
      Close: "Eb4"
    },
    {
      Number: 11,
      Open: "A3",
      Close: "Bb3"
    },
    {
      Number: 12,
      Open: "C4",
      Close: "Bb3"
    },
    {
      Number: 13,
      Open: "G3",
      Close: "F3"
    },
    {
      Number: 14,
      Open: "G#3",
      Close: "G3"
    },
    {
      Number: 15,
      Open: "Eb3",
      Close: "D3"
    },
    {
      Number: 16,
      Open: "F3",
      Close: "Eb3"
    },
    {
      Number: 17,
      Open: "C3",
      Close: "Bb2"
    },
    {
      Number: 18,
      Open: "D3",
      Close: "Bb2"
    },
    {
      Number: 19,
      Open: "A3",
      Close: "F2"
    },
    {
      Number: 20,
      Open: "B3",
      Close: "C#4"
    },
    {
      Number: 21,
      Open: "F#3",
      Close: "E3"
    },
    {
      Number: 22,
      Open: "F#4",
      Close: "E4"
    },
    {
      Number: 23,
      Open: "B2",
      Close: "C#3"
    }
  ],
  getAlternative: function(note){
    if(note === undefined ){
      return false;
    }
    console.log('getAlternative---------------------------');
    console.log(note);
    var current = this.map.find((el)=>el.Number === note.data.number);
    var currentNote = current[note.data.direction];
    console.log(currentNote);
    var alternative = this.map.find(function(el){
      if(el.Open === current[note.data.direction] || el.Close === current[note.data.direction]) {
        if(el.Number !== current.Number){
          return true;
        }
        return false;
      } else {  
        return false;
      }
     // else (el.Close === current[note.data.direction] && el.Number != current.Number)
      //  if(el.Number != current.Number)
      //    return el
    });
    console.log('alternative');
    console.log(alternative);
    if(!alternative){
      return false;
    }
    return {
      number:alternative.Number,
      direction: (alternative.Open === currentNote ) ? Directions.OPEN : Directions.CLOSE,
      selected: true
    }
  },
  getNote: function(number,direction){
    var note = this.map.find(function(el){
      if(el.Number === number)
        return el
    });
    if(typeof note !== 'undefined'){
      return note[direction]
    }
    return ''
    
  },
  getNumbers: function(note){
    var numbers = this.map.find(function(el){
      if((el.Open === note) || (el.Close === note))
        return el
    });
    if(typeof note !== 'undefined'){
      return numbers
    } else {
      return [];
    }
    
  }
}
