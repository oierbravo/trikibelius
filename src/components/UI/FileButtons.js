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

const FileButtons = ({classes,state, saveStorage,loadStorage,importNumbers,exportNumbers,exportNotes,clearSheet }) => (
  <div className=''>{console.log(classes)}
    <ListItem button disabled onClick={() => saveStorage()}>
      <ListItemIcon>
        <KeyboardTab />
     </ListItemIcon>
     <ListItemText primary="Save" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl-s']} onKeyEvent={(key, e) =>  saveStorage()} />

     <ListItem button disabled onClick={() => loadStorage()}>
      <ListItemIcon>
        <KeyboardReturn />
      </ListItemIcon>
      <ListItemText primary="Load" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrol+o']} handleEventType="keydown" onKeyEvent={(key, e) => loadStorage()} />

    <ListItem button disabled onClick={() => importNumbers()}>
      <ListItemIcon>
        <KeyboardReturn />
      </ListItemIcon>
      <ListItemText primary="Import" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrol+i']} handleEventType="keydown" onKeyEvent={(key, e) => loadStorage()} />

    <ListItem button disabled onClick={() => exportNumbers()}>
    <ListItemIcon>
    <DeleteIcon />
    </ListItemIcon>
    <ListItemText primary="Export Numbers" />
    </ListItem>

    <KeyboardEventHandler handleKeys={['ctrl+shift+s']} onKeyEvent={(key, e) =>  exportNumbers()} />

    <ListItem button disabled onClick={() => exportNotes()}>
    <ListItemIcon>
    <SyncIcon />
    </ListItemIcon>
    <ListItemText primary="Export Notes" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl+shift+a']}  onKeyEvent={(key, e) =>  exportNotes()} />


    <ListItem button disabled onClick={() => clearSheet()}>
    <ListItemIcon>
    <SyncIcon />
    </ListItemIcon>
    <ListItemText primary="Clear sheet" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl+shift+n']} onKeyEvent={(key, e) =>  clearSheet()} />
  </div>
)
FileButtons.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(FileButtons)