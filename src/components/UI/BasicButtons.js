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

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { DeleteIcon,SyncIcon} from 'mdi-react';

const BasicButtons = ({classes,state, addLineBreak,deleteElement,addSilence,toggleAlternative,currentSelected }) => (
  <div className='toolbar-group'>{console.log(classes)}
  <ListItem>
        
      <ListItemText primary="Add" />
    </ListItem>
  <ListItem button onClick={() => addSilence()}>
      <ListItemIcon>
        <KeyboardTab />
      </ListItemIcon>
      <ListItemText primary="Space" />
    </ListItem>
    <KeyboardEventHandler
      handleKeys={['space']}
      onKeyEvent={(key, e) =>  addSilence()} />
   
      <ListItem button onClick={() => addLineBreak()}>
      <ListItemIcon>
        <KeyboardReturn />
      </ListItemIcon>
      <ListItemText primary="Linebreak" />
    </ListItem>
    <KeyboardEventHandler
      handleKeys={['enter']}
      handleEventType="keydown"
      onKeyEvent={(key, e) => addLineBreak()} />

      <ListItem button onClick={() => deleteElement()}>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Delete" />
    </ListItem>
  
    <KeyboardEventHandler
      handleKeys={['backspace','del']}
      onKeyEvent={(key, e) =>  deleteElement()} />

 <ListItem button onClick={() => toggleAlternative(TrikiNumbers.getAlternative(state.elements.present.find(((element) => (element.selected) ? element : null))))}>
      <ListItemIcon>
        <SyncIcon />
      </ListItemIcon>
      <ListItemText primary="Change alternative" />
    </ListItem>
 
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