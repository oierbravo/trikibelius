import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Direction from '../../containers/Direction';
import ElementActions from '../../containers/ElementActions';
import Mode from '../../containers/Mode';
import UndoRedo from '../../containers/UndoRedo';
import './ToolBar.css'
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  
  });
class ToolBar extends React.Component {
    constructor (props) {
      super(props)
    }
   
  
    
    render() {
      const { classes, handleDrawerOpen,open} = this.props;
      return (
        <Toolbar variant="dense"  disableGutters={!open}>
        
        <Direction/>
        <Mode/>
        <UndoRedo/>
    </Toolbar>
      );
    }
  }
  ToolBar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
  };
  export default withStyles(styles, { withTheme: true })(ToolBar);

  /**<IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton,open && classes.hide)}
            >
              <MenuIcon />
            </IconButton> */