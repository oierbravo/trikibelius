import React from 'react'
import PropTypes from 'prop-types'
import Direction from '../../containers/Direction';
import Tools from '../../containers/Tools';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './ToolBar.css'
import {setEditMode,EditModes} from  '../../actions'

const SelectMode = ({setEditMode,changeMode,mode }) => (
    <div className="selectEditMode">
        <ul>
            <li className={(mode === EditModes.SELECT ) ? 'selected' : ''} onClick={()=>changeMode(EditModes.SELECT)}>SELECT</li> 
            <li className={(mode === EditModes.ALTERNATIVE ) ? 'selected' : ''} onClick={()=>changeMode(EditModes.ALTERNATIVE)}>ALTERNATIVE</li>
            <li className={(mode === EditModes.DELETE ) ? 'selected' : ''} onClick={()=>changeMode(EditModes.DELETE)}>DELETE</li>
        </ul>
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
SelectMode.propTypes = {
    mode: PropTypes.string,
    changeMode: PropTypes.func.isRequired
}
export default SelectMode