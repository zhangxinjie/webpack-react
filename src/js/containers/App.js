'use strict';
import React, { Component } from 'react';
import { Link, NavLink,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './page/Home';
import About from './page/About';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="container">
        <p>welcome to there</p>
        <ul>
          <li>
            <NavLink to={`${match.url}/home`} activeClassName="activeNav">Home</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/about`} activeClassName="activeNav">About</NavLink>
          </li>
          <li className="clearfix"></li>
        </ul>
        <Link to="/mine">Mine</Link>
        <Route path={`${match.url}/home`} component={Home}></Route>
        <Route path={`${match.url}/about`} component={About}></Route>
      </div>
    )
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(App);
