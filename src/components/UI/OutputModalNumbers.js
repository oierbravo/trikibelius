import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutputString from './OutputString';

export default class OutputModalNumbers extends React.Component {


  render(open) {
    return (
      <div>
        <Dialog
          open={this.props.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Numbers</DialogTitle>
          <DialogContent>

           <OutputString elements={this.props.elements}/>
         
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleModalCloseNumbers} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}