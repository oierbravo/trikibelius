export const TrikiKeyboard = 
 {map:
[
  {
      Number: 1,
      KeyCode: 221
    },
    {
      Number: 2,
      KeyCode: 187
    },
    {
      Number: 3,
      KeyCode: 219
    },
    {
      Number: 4,
      KeyCode: 189
    },
    {
      Number: 5,
      KeyCode: 80
    },
    {
      Number: 6,
      KeyCode: 48
    },
    {
      Number: 7,
      KeyCode: 79
    },
    {
      Number: 8,
      KeyCode: 57
    },
    {
      Number: 9,
      KeyCode: 73
    },
    {
      Number: 10,
      KeyCode: 56
    },
    {
      Number: 11,
      KeyCode: 85
    },
    {
      Number: 12,
      KeyCode: 55
    },
    {
      Number: 13,
      KeyCode: 89
    },
    {
      Number: 14,
      KeyCode: 54
    },
    {
      Number: 15,
      KeyCode: 84
    },
    {
      Number: 16,
      KeyCode: 53
    },
    {
      Number: 17,
      KeyCode: 82
    },
    {
      Number: 18,
      KeyCode: 52
    },
    {
      Number: 19,
      KeyCode: 69
    },
    {
      Number: 20,
      KeyCode: 51
    },
    {
      Number: 21,
      KeyCode: 87
    },
    {
      Number: 22,
      KeyCode: 50
    },
    {
      Number: 23,
      KeyCode: 81
    }
  ], getNumber : function(keycode) {
    var key = this.map.find(el=>el.KeyCode === keycode);
    
    if(typeof key === 'object'){
      console.log(typeof key);
      return key.Number;
    } else {
      return false;
    }
    
  }
}