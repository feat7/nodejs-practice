import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DividerExample from './components/DividerExample';


class Hello extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="Hello">
      <DividerExample />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Hello;
