import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './DirectionButtons.css'
import {setDirection,Directions} from '../../actions'
const DirectionButtons = ({state, clickButton,toggleDirection,setDirection}) => (
<div className='u-flex'>
  <Button label="Itxi" name="close" active={(state.direction === 'CLOSE')} clickButton={() => clickButton('CLOSE')}/>
  <Button label="Ireki" name="open" active={(state.direction === 'OPEN')} clickButton={() => clickButton('OPEN')}/>
  <KeyboardEventHandler
    handleKeys={['all']}
    handleEventType="keydown"
    onKeyEvent={(key, e) =>
    
     (e.key === "Shift" && !e.repeat) ? toggleDirection():false
     } />
  <KeyboardEventHandler
    handleKeys={['all']}
    handleEventType="keyup"
    onKeyEvent={(key, e) =>
    
     (e.key === "Shift" && !e.repeat) ? toggleDirection():false
     } />
     <KeyboardEventHandler
    handleKeys={['z']}
    onKeyEvent={(key, e) => setDirection(Directions.CLOSE)} />
     <KeyboardEventHandler
    handleKeys={['x']}
    onKeyEvent={(key, e) => setDirection(Directions.OPEN)} />
</div>
)
DirectionButtons.propTypes = {
  state: PropTypes.object,
  clickButton: PropTypes.func.isRequired,
  toggleDirection:PropTypes.func.isRequired,
  setDirection:PropTypes.func.isRequired
}
export default DirectionButtons