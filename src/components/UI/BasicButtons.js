import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './DirectionButtons.css'
import {TrikiNumbers} from '../../maps/Triki'

const BasicButtons = ({state, addLineBreak,deleteElement,addSilence,toggleAlternative,currentSelected }) => (
  <div className='toolbar-group basic-buttons'>
    <Button label="LINE" name="addLinebreak" clickButton={() => addLineBreak()}/>
    <KeyboardEventHandler
      handleKeys={['enter']}
      handleEventType="keydown"
      onKeyEvent={(key, e) => addLineBreak()} />

    <Button label="DEL" name="deleteElement" clickButton={() => deleteElement()}/>
    <KeyboardEventHandler
      handleKeys={['backspace','del']}
      onKeyEvent={(key, e) =>  deleteElement()} />

    <Button label="SPACE" name="addSilence" clickButton={() => addSilence()}/>
    <KeyboardEventHandler
      handleKeys={['space']}
      onKeyEvent={(key, e) =>  addSilence()} />
      
<Button label="ALT" name="toggleAlternative" clickButton={() => toggleAlternative(TrikiNumbers.getAlternative(state.elements.find(((element) => (element.selected) ? element : null))))}/>
      
  </div>
)
BasicButtons.propTypes = {
  state: PropTypes.object,
  addLineBreak: PropTypes.func.isRequired,
  addSilence: PropTypes.func.isRequired,
  toggleAlternative: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired
}
export default BasicButtons