import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './DirectionButtons.css'
import {BbEb} from '../../maps/Numbers'

const BasicButtons = ({state, addLineBreak,deleteElement,addSilence,toggleAlternative,currentSelected }) => (
  <div className='u-flex'>
    <Button onClick={() => addLineBreak()}>Line</Button>
    <KeyboardEventHandler
      handleKeys={['enter']}
      handleEventType="keydown"
      onKeyEvent={(key, e) => addLineBreak()} />

    <Button label="DEL" name="deleteElement" onClick={() => deleteElement()}>DEL</Button>
    <KeyboardEventHandler
      handleKeys={['backspace','del']}
      onKeyEvent={(key, e) =>  deleteElement()} />

    <Button label="SPACE" name="addSilence" onClick={() => addSilence()}>SPACE</Button>
    <KeyboardEventHandler
      handleKeys={['space']}
      onKeyEvent={(key, e) =>  addSilence()} />
    <Button label="ALT" name="toggleAlternative" onClick={() => toggleAlternative(BbEb.getAlternative(state.elements.find(((element) => (element.selected) ? element : null))))}>
      ALT
      </Button>
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