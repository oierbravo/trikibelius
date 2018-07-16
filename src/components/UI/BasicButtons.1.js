import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './DirectionButtons.css'
import {BbEb} from '../../maps/Numbers'

const BasicButtons = ({state, addLineBreak,deleteElement,addSilence,toggleAlternative,currentSelected }) => (
  <div className='u-flex'>
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

      <Button label="ALT" name="toggleAlternative" clickButton={() => toggleAlternative(BbEb.getAlternative(state.elements.map(((element) => (element.selected) ? element : false))))}/>
      <div>Current:{BbEb.getAlternative(state.elements.map(((element) => (element.selected) ? element : false)))}</div>
  </div>
)
BasicButtons.propTypes = {
  state: PropTypes.object,
  addLineBreak: PropTypes.func.isRequired,
  addSilence: PropTypes.func.isRequired,
  toggleAlternative: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
  currentSelected: PropTypes.number
}
export default BasicButtons