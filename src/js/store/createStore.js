'use strict';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk);

export default ((initialState={}) => {
  const store = createStore(
    rootReducer,
    initialState,
    middleware
  );
  return store;
})
