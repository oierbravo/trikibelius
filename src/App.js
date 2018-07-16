import React, { Component } from 'react';
import './App.css';
import Sheet from './containers/Sheet';
import Pad from './containers/Pad';
import ToolBar from './components/UI/ToolBar';
import Output from './containers/Output';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Pad/>
        <ToolBar/>
        <Sheet/>
        <Output/>
    </MuiThemeProvider>
    );
  }
}

export default App;
