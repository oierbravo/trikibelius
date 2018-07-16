import React from 'react'
import PropTypes from 'prop-types'
import TrikiPadButton from './TrikiPadButton'

import TrikiNumbers from '../../maps/Triki'
import {TrikiKeyboard} from '../../maps/Keyboard'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './TrikiPad.css';
const buttons = TrikiNumbers.getMap().reverse();

const TrikiPad = ({currentDirection,  clickButton }) => (
  <div className="ui-triki-pad u-block">
    <div className="ui-triki-pad-flex ui-triki-pad-flex--pares">
    { 
      
      buttons.filter((el) =>(el.Number%2) === 0).map((element,index) =>
          <TrikiPadButton         
            key={index}
            number={element.Number}
            {...element}
            onClick={() => clickButton(element.Number,currentDirection)}
          />)
    }
    </div>
    <div className="ui-triki-pad-flex ui-triki-pad-flex--impares" >
      { 
          buttons.filter((el) =>el.Number%2).map((element,index) =>
            <TrikiPadButton         
              key={index}
              number={element.Number}
              {...element}
              onClick={() => clickButton(element.Number,currentDirection)}
            />)
      }
    </div>
    {
      <KeyboardEventHandler
      handleKeys={['all']}
      onKeyEvent={(key, e) => TrikiKeyboard.getNumber(e.keyCode) ?  clickButton(TrikiKeyboard.getNumber(e.keyCode),currentDirection) : false} />
    }
  </div>
)
TrikiPad.propTypes = {
  currentDirection: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired
}
export default TrikiPad