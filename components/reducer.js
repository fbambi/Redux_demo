import {combineReducers} from 'redux';

import counterReducer from './page1/counterReducer.js'

const AppReducer = combineReducers({
  counterReducer
});

export default AppReducer;
