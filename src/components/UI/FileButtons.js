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
import ImportNumbersModal from './ImportNumbersModal';


export default class FileButtons extends React.Component {
  state = {
    openNumbersModal: false,
    openNotesModal:false,
    openImportModal:false,
    importNumbersData: '',
  };
  exportNumbers = () => {
    this.setState({ openNumbersModal: true });
  };
  exportNotes = () => {
    this.setState({ openNotesModal: true });
  };
  importNumbers = () => {
    this.setState({ openImportModal: true });
  };
  handleModalCloseNumbers = () => {
    console.log('clos-nums');
    this.setState({ openNumbersModal: false });
  }
  handleModalCloseNotes = () => {
    console.log('clos-notes');
    this.setState({ openNotesModal: false });
  }
  handleModalCloseImport = () => {
    console.log('clos-import');
    this.setState({ openImportModal: false });
  }
  handleImportSubmit = () => {
    console.log('clos-import');
    console.log(this.state.importNumbersData);
    this.setState({ openImportModal: false });
  }
  handleImportChangeData = (event) => {
    console.log('change-import')
    this.setState({ importNumbersData: event.target.value });
    console.log(event.target.value);
  }
  render(classes, saveStorage,loadStorage,importNumbers,clearElements) {
    return (
      <div className=''>
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

    <ListItem button onClick={() => this.importNumbers()}>
      <ListItemIcon>
        <FolderUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Import" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrol+i']} handleEventType="keydown" onKeyEvent={(key, e) => this.importNumbers()} />

    <ListItem button onClick={() => this.exportNumbers()}>
    <ListItemIcon>
    <ContentSaveOutlineIcon />
    </ListItemIcon>
    <ListItemText primary="Export Numbers" />
    </ListItem>

    <KeyboardEventHandler handleKeys={['ctrl+shift+s']} onKeyEvent={(key, e) =>  this.exportNumbers()} />

    <ListItem button onClick={() => this.exportNotes()}>
    <ListItemIcon>
    <ContentSaveOutlineIcon />
    </ListItemIcon>
    <ListItemText primary="Export Notes" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl+shift+a']}  onKeyEvent={(key, e) =>  this.exportNotes()} />


    <ListItem button onClick={() => this.props.clearElements()}>
    <ListItemIcon>
    <DeleteForeverIcon />
    </ListItemIcon>
    <ListItemText primary="Clear sheet" />
    </ListItem>
    <KeyboardEventHandler handleKeys={['ctrl+shift+n']} onKeyEvent={(key, e) =>  this.props.clearElements()} />

    <OutputModalNumbers elements={this.props.elements} open={this.state.openNumbersModal} handleModalCloseNumbers={this.handleModalCloseNumbers}/>
    <OutputModalNotes elements={this.props.elements} open={this.state.openNotesModal} handleModalCloseNotes={this.handleModalCloseNotes}/>
    <ImportNumbersModal  open={this.state.openImportModal} handleModalCloseImport={this.handleModalCloseImport} handleImportChangeData={this.handleImportChangeData} handleSubmit={ this.handleImportSubmit}/>
    </div>
     );
  }
}


FileButtons.propTypes = {
  elements: PropTypes.array.isRequired, 
  clearElements: PropTypes.func.isRequired,
  importNumbers: PropTypes.func.isRequired
}
//export default withStyles(styles)(FileButtons)