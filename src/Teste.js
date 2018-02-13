import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';
import BottomNavigationExample from './BottomNavigationExample';

class Teste extends Component {
  render() {
    return (
      <div className="Teste">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.handleToggle}
        />
        <BottomNavigationExample />
      </div>
    );
  }
}

export default Teste;
