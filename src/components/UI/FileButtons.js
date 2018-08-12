import React from 'react'
import PropTypes from 'prop-types'

import OutputModalNotes from './OutputModalNotes';

import OutputModalNumbers from './OutputModalNumbers';

import KeyboardEventHandler from 'react-keyboard-event-handler';

import { withStyles} from '@material-ui/core/styles';
import styles from './ButtonStyle'



import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ContentSaveIcon,ContentSaveOutlineIcon,FolderOpenIcon,FolderUploadIcon,DeleteForeverIcon} from 'mdi-react';


export default class FileButtons extends React.Component {
  state = {
    openNumbersModal: false,
    openNotesModal:false
  };
  exportNumbers = () => {
    this.setState({ openNumbersModal: true });
  };
  exportNotes = () => {
    this.setState({ openNotesModal: true });
  };
  handleModalCloseNumbers = () => {
    console.log('clos-nums');
    this.setState({ openNumbersModal: false });
  }
  handleModalCloseNotes = () => {
    console.log('clos-notes');
    this.setState({ openNotesModal: false });
  }
  render(classes, saveStorage,loadStorage,importNumbers,clearSheet) {
    return (
      <div className=''>{console.log(this.props.elements)}
    <ListItem button disabled onClick={() => saveStorage()}>
      <ListItemIcon>
        <ContentSaveIcon />
     </ListItemIcon>
     <ListItemText primary="Save" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl-s']} onKeyEvent={(key, e) =>  saveStorage()} />

     <ListItem button disabled onClick={() => loadStorage()}>
      <ListItemIcon>
        <FolderOpenIcon />
      </ListItemIcon>
      <ListItemText primary="Load" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrol+o']} handleEventType="keydown" onKeyEvent={(key, e) => loadStorage()} />

    <ListItem button disabled onClick={() => importNumbers()}>
      <ListItemIcon>
        <FolderUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Import" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrol+i']} handleEventType="keydown" onKeyEvent={(key, e) => importNumbers()} />

    <ListItem button onClick={() => this.exportNumbers()}>
    <ListItemIcon>
    <ContentSaveOutlineIcon />
    </ListItemIcon>
    <ListItemText primary="Export Numbers" />
    </ListItem>

    <KeyboardEventHandler handleKeys={['ctrl+shift+s']} onKeyEvent={(key, e) =>  this.exportNumbers()} />

    <ListItem button disabled onClick={() => this.exportNotes()}>
    <ListItemIcon>
    <ContentSaveOutlineIcon />
    </ListItemIcon>
    <ListItemText primary="Export Notes" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl+shift+a']}  onKeyEvent={(key, e) =>  this.exportNotes()} />


    <ListItem button disabled onClick={() => clearSheet()}>
    <ListItemIcon>
    <DeleteForeverIcon />
    </ListItemIcon>
    <ListItemText primary="Clear sheet" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl+shift+n']} onKeyEvent={(key, e) =>  clearSheet()} />

    <OutputModalNumbers elements={this.props.elements} open={this.state.openNumbersModal} handleModalCloseNumbers={this.handleModalCloseNumbers}/>
    <OutputModalNotes elements={this.props.elements} open={this.state.openNotesModal} handleModalCloseNotes={this.handleModalCloseNotes}/>
    </div>
     );
  }
}


FileButtons.propTypes = {
  elements: PropTypes.array.isRequired
}
//export default withStyles(styles)(FileButtons)