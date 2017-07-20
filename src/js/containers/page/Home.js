'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Hello Home!</h2>
      </div>
    )
  }
}
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Home);
