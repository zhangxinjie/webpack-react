'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as appAction from '../../actions/appAction';

class Mine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { msg,changeContent } = this.props;
    return (
      <div>
        <Link to="app">
          {msg}
        </Link>
        <button onClick={changeContent}>Change</button>
        <h2>Hello Mine!</h2>
      </div>
    )
  }
}
export default connect(
  state => ({
    msg: state.app.msg
  }),
  dispatch => ({
    changeContent: () => dispatch(appAction.changeContent())
  })
)(Mine);
