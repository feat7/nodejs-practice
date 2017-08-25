import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/Menu';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <AppBar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
          </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
