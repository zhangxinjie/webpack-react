'use strict';
import * as types from '../constants/ActionTypes';

const appReducer = (state={ msg:'go to App' }, action) => {
  switch (action.type) {
    case types.CHANGE_CONTENT :
      return Object.assign({}, state, {msg: 'go App'});
    default:
      return state;
  }
}

export default appReducer;
