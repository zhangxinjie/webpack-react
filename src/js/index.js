import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/route';
import createStore from './store/createStore';
import '../scss/reset.scss';
import '../scss/common.scss';

let store = createStore();

class Main extends Component {
  render(){
    return (
      <Router basename={'/webpack-react'}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>
    )
  }
}

render(<Main />,document.getElementById("app"));
