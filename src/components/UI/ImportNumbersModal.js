import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutputNotes from './OutputNotes';

export default class ImportNumbersModal extends React.Component {
  state = {
    numbers: ''
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this);
    console.log(this);
    alert('Your favorite flavor is: ' + this.state.value);
    
    this.props.handleModalCloseNotes()
  }
  render(open) {
    return (
      <div>
        <Dialog
        disableBackdropClick
          open={this.props.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Numbers</DialogTitle>
          <DialogContent>

           <form onSubmit={this.props.handleSubmit}>

              <textarea onChange={this.props.handleImportChangeData} value="+12,+18"/>
             </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleSubmit} color="primary">
              Ok
            </Button>
            <Button onClick={this.props.handleModalCloseImport} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}