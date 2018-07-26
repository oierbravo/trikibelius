import React from 'react'
import PropTypes from 'prop-types'
//import Button from './Button'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './DirectionButtons.css'
import {Directions} from '../../actions'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './ButtonStyle'


const DirectionButtons = ({classes,direction, clickButton,toggleDirection,setDirection}) => (
<div className='toolbar-group direction-buttons'>
{console.log(direction)}
  <Button className={classes.button}  variant="contained" color={(direction === Directions.CLOSE) ? 'primary':'default'} onClick={() => clickButton(Directions.CLOSE)}>Itxi</Button>
  <Button className={classes.button}  variant="contained" color={(direction === Directions.OPEN) ? 'secondary':'default'} onClick={() => clickButton(Directions.OPEN)}>Ireki</Button>
  <KeyboardEventHandler
    handleKeys={['all']}
    handleEventType="keydown"
    onKeyEvent={(key, e) =>
    
     (e.key === "Shift" && !e.repeat) ? toggleDirection():false
     } />
  <KeyboardEventHandler
    handleKeys={['all']}
    handleEventType="keyup"
    onKeyEvent={(key, e) =>
    
     (e.key === "Shift" && !e.repeat) ? toggleDirection():false
     } />
     <KeyboardEventHandler
    handleKeys={['z']}
    onKeyEvent={(key, e) => setDirection(Directions.CLOSE)} />
     <KeyboardEventHandler
    handleKeys={['x']}
    onKeyEvent={(key, e) => setDirection(Directions.OPEN)} />
</div>
)
DirectionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired,
  toggleDirection:PropTypes.func.isRequired,
  setDirection:PropTypes.func.isRequired
}
export default  withStyles(styles)(DirectionButtons)