import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './DirectionButtons.css'
import {TrikiNumbers} from '../../maps/Triki'

import { withStyles} from '@material-ui/core/styles';
import styles from './ButtonStyle'

import KeyboardTab from '@material-ui/icons/KeyboardTab';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

import { DeleteIcon,SyncIcon} from 'mdi-react';

const BasicButtons = ({classes,state, addLineBreak,deleteElement,addSilence,toggleAlternative,currentSelected }) => (
  <div className='toolbar-group'>{console.log(classes)}
  <Tooltip title="Space">
                   <Button className={classes.button} variant="contained" onClick={() => addSilence()}><KeyboardTab></KeyboardTab></Button>
              </Tooltip>
    <KeyboardEventHandler
      handleKeys={['space']}
      onKeyEvent={(key, e) =>  addSilence()} />
    <Tooltip title="Linebreak">
      <Button className={classes.button} variant="contained" onClick={() => addLineBreak()}><KeyboardReturn></KeyboardReturn></Button>
      </Tooltip>
    <KeyboardEventHandler
      handleKeys={['enter']}
      handleEventType="keydown"
      onKeyEvent={(key, e) => addLineBreak()} />
   <Tooltip title="Delete">
    <Button className={classes.button} variant="contained" onClick={() => deleteElement()}><DeleteIcon></DeleteIcon></Button>
    </Tooltip>
    <KeyboardEventHandler
      handleKeys={['backspace','del']}
      onKeyEvent={(key, e) =>  deleteElement()} />

    <Tooltip title="Change alternative">
    <Button className={classes.button}  variant="contained" onClick={() => toggleAlternative(TrikiNumbers.getAlternative(state.elements.present.find(((element) => (element.selected) ? element : null))))}>
      <SyncIcon/>
      </Button>
      </Tooltip>
  </div>
)
BasicButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  addLineBreak: PropTypes.func.isRequired,
  addSilence: PropTypes.func.isRequired,
  toggleAlternative: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired
}
export default withStyles(styles)(BasicButtons)