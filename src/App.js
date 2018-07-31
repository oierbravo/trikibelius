import React, { Component } from 'react';
import './App.css';
import Sheet from './components/Sheet';
import Pad from './containers/Pad';
import ToolBar from './components/UI/ToolBar';
import Output from './containers/Output';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme(
  {
    root: {
      flexGrow: 1,
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <ToolBar/>
          <Pad/>
          <Grid container justify="flex-start" align="flex-start" className="content" alignItems="center" direction="column" spacing={0}>
              <Grid item xs={12}>
              <Sheet/>
              </Grid>
              <Grid item xs={12}>
              <Output/>
            </Grid>
          </Grid>
    </MuiThemeProvider>
    );
  }
}

export default App;
