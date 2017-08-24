import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          Hello React!
          <RaisedButton label={'Hello Page!'} primary={true}
            containerElement={ <Link to="/hello" /> } />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
