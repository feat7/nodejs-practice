import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/hello" component={Hello} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
