import React, { Component } from 'react';
import './App.css';
import Sheet from './containers/Sheet';
import Pad from './containers/Pad';
import ToolBar from './components/UI/ToolBar';
import Output from './containers/Output';

class App extends Component {
  render() {
    return (
      <div className="App container-full">
        <Pad/>
        <ToolBar/>
        <Sheet/>
        <Output/>  
      </div>
    );
  }
}

export default App;
