'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Hello About!</h2>
      </div>
    )
  }
}
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(About);
