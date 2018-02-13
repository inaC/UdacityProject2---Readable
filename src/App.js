import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import './App.css';
import Teste from './Teste';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Teste />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
