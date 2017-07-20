'use strict';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../containers/App';
import Mine from '../containers/page/Mine';

class Routes extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Mine}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/app" component={App}></Route>
        </Switch>
      </div>
    )
  }
}

export default Routes;
