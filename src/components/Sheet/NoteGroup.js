import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class NoteGroup extends React.Component {
  render () {
    return (
      <div>
        {this.props.data.map((note,index)=>
          <Note groupIndex={index} data={note} onClick={this.onNoteClick} />
        )}
        </div>
    
    );
  }
}
NoteGroup.propTypes = {
  onNoteClick: PropTypes.func,
  notes:PropTypes.object.isRequired,
  active:PropTypes.bool
}
export default NoteGroup
//export default withStyles(styles)(Note);

//clickElement={() => clickElement(index,currentMode)}