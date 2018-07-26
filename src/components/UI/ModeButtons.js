import React from 'react'
import PropTypes from 'prop-types'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {EditModes} from  '../../actions'
import ToggleButton, { ToggleButtonGroup } from '@material-ui/lab/ToggleButton';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';

import { CursorDefaultOutlineIcon, SyncIcon,SwapHorizontalIcon, EraserVariantIcon,MusicNoteIcon} from 'mdi-react';
import Tooltip from '@material-ui/core/Tooltip';

const ModeButtons = ({setEditMode,changeMode,mode }) => (
    <div className="toolbar-group mode-buttons">
            <ToggleButtonGroup value={mode} exclusive onChange={(mode)=>changeMode(mode)}>
                <ToggleButton value={EditModes.SELECT}>
                  <CursorDefaultOutlineIcon />
                </ToggleButton>
                <ToggleButton disabled value={EditModes.DIRECTION}>
                  <SwapHorizontalIcon />
                </ToggleButton>
                <ToggleButton disabled value={EditModes.ALTERNATIVE}>
                  <SyncIcon />
                </ToggleButton>
              <ToggleButton disabled value={EditModes.DELETE}>
                   <EraserVariantIcon />
                </ToggleButton>
                <ToggleButton disabled value={EditModes.PLAY}>
                  <MusicNoteIcon />
                </ToggleButton>
            </ToggleButtonGroup>
       
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
    </div>
)
ModeButtons.propTypes = {
    mode: PropTypes.string,
    changeMode: PropTypes.func.isRequired
}
export default ModeButtons