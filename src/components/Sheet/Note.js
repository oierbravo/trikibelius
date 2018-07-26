import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import "./Note.css"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
class Note extends React.Component {
  constructor (props) {
    super(props)
    this.state = props;
    this.click = this.click.bind(this);
  }
  click () {
    if(this.state.active === true)
    this.setState({active:!this.state.active});
    this.props.onClick();
  }
  render () {
    return (
      <div className={['note','note-' + this.props.data.direction.toLowerCase(),(this.state.active) ? 'active' : ''].join(' ')} onClick={this.click} >
  {this.props.data.number}
    
 </div>
    );
  }
}
Note.propTypes = {
  onClick: PropTypes.func,
  data:PropTypes.object.isRequired,
  active:PropTypes.bool
}
export default Note
//export default withStyles(styles)(Note);