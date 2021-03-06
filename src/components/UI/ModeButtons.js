import React from 'react'
import PropTypes from 'prop-types'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {EditModes} from  '../../actions'
//import styles from './ButtonStyle'
import { withStyles } from '@material-ui/core/styles';
import ToggleButton, { ToggleButtonGroup } from '@material-ui/lab/ToggleButton';
import KeyboardTab from '@material-ui/icons/KeyboardTab';

import { ArrowSplitVerticalIcon,ArrowCollapseLeftIcon,CursorDefaultOutlineIcon, SyncIcon,SwapHorizontalIcon, EraserVariantIcon,MusicNoteIcon} from 'mdi-react';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  toggleContainer: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit}px 0`
  },
  toggleButton: {
   height: '40px'
  },
});

const ModeButtons = ({classes,setEditMode,changeMode,mode }) => (
    <div className={classes.toggleContainer}>
            <ToggleButtonGroup  value={mode} exclusive onChange={(mode)=>changeMode(mode)}>
                <ToggleButton className={classes.toggleButton} value={EditModes.SELECT}>
                  <CursorDefaultOutlineIcon />
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} value={EditModes.DIRECTION}>
                  <SwapHorizontalIcon />
                </ToggleButton>
                <ToggleButton className={classes.toggleButton}  value={EditModes.ALTERNATIVE}>
                  <SyncIcon />
                </ToggleButton>
              <ToggleButton className={classes.toggleButton}  value={EditModes.DELETE}>
                   <EraserVariantIcon />
                </ToggleButton>
                <ToggleButton className={classes.toggleButton}  value={EditModes.GROUP_LEFT}>
                   <ArrowSplitVerticalIcon />
                </ToggleButton>
                <ToggleButton className={classes.toggleButton} disabled value={EditModes.PLAY}>
                  <MusicNoteIcon />
                </ToggleButton>
            </ToggleButtonGroup>

    </div>
)
ModeButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    mode: PropTypes.string,
    changeMode: PropTypes.func.isRequired
}

export default  withStyles(styles)(ModeButtons)

/*
       
        <KeyboardEventHandler
    handleKeys={['all']}
    handleEventType="keydown"
    onKeyEvent={(key, e) =>
    
     (e.key === "Control" && !e.repeat) ? changeMode(EditModes.ALTERNATIVE):false
     } />
     <KeyboardEventHandler
    handleKeys={['all']}
    handleEventType="keyup"
    onKeyEvent={(key, e) =>
    
     (e.key === "Control" && !e.repeat) ? changeMode(EditModes.SELECT):false
     } />

*/