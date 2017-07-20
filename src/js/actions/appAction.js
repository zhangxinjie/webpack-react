'use strict';
import * as types from '../constants/ActionTypes';

export const changeContent = () => {
  return (dispatch) => {
    dispatch({ type: types.CHANGE_CONTENT});
  }
}
