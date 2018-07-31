import React from 'react'
import PropTypes from 'prop-types'
import Direction from '../../containers/Direction';
import ElementActions from '../../containers/ElementActions';
import Mode from '../../containers/Mode';
import UndoRedo from '../../containers/UndoRedo';
import './ToolBar.css'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const ToolBar = ({state }) => (
    <AppBar  color="default">
        <Toolbar variant="dense" >
            <Direction/>
            <ElementActions/>
            <Mode/>
            <UndoRedo/>
        </Toolbar>
    </AppBar>
)
ToolBar.propTypes = {
  state: PropTypes.object,
}
export default ToolBar