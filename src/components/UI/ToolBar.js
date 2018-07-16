import React from 'react'
import PropTypes from 'prop-types'
import Direction from '../../containers/Direction';
import Tools from '../../containers/Tools';
import Mode from '../../containers/Mode';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './ToolBar.css'


const ToolBar = ({state }) => (
    <div className="toolbar">
        <Direction/>
        <Tools/>
        <Mode/>
    </div>
)
ToolBar.propTypes = {
  state: PropTypes.object,
}
export default ToolBar