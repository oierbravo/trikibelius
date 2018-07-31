import React from 'react'
import PropTypes from 'prop-types'

import { withStyles} from '@material-ui/core/styles';
import styles from './ButtonStyle'

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import KeyboardEventHandler from 'react-keyboard-event-handler';

import Undo from '@material-ui/icons/Undo';
import Redo from '@material-ui/icons/Redo';

import { DeleteIcon,SyncIcon} from 'mdi-react';

const UndoRedoButtons = ({classes,onUndo, onRedo,canUndo,canRedo}) => (
    <div className='toolbar-group undo-redo-buttons'>
        <Tooltip title="Undo (Ctrl+z)">
            <Button className={classes.button} variant="contained" onClick={() => onUndo()} disabled={!canUndo} ><Undo></Undo></Button>
        </Tooltip>
        <KeyboardEventHandler handleKeys={['ctrl+z']} onKeyEvent={(key, e) =>  onUndo()}/>

        <Tooltip title="Redo (Ctrl+shift+z)">
            <Button className={classes.button} variant="contained" onClick={() => onRedo()} disabled={!canRedo} ><Redo></Redo></Button>
           
        </Tooltip>
        <KeyboardEventHandler handleKeys={['ctrl+shift+z']} onKeyEvent={(key, e) =>  onRedo()}/>
   
    </div>
    )
    UndoRedoButtons.propTypes = {
      onUndo: PropTypes.func.isRequired,
      onRedo: PropTypes.func.isRequired,
      canUndo: PropTypes.bool.isRequired,
      canRedo:PropTypes.bool.isRequired,
    }
    export default  withStyles(styles)(UndoRedoButtons)